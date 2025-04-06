import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import styles from './BannerBackground.module.sass';
import logoUrl from '../../../../public/svg/logo.svg';

const StarField = () => {
    const particlesRef = useRef();
    const particlesCount = 10000;
    const starField = 100;

    const [positions, sizes] = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        const sizes = new Float32Array(particlesCount);

        for (let i = 0; i < particlesCount; i++) {
            // Random positions in a sphere
            const radius = Math.random() * starField;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = radius * Math.cos(phi);

            // Varied star sizes
            sizes[i] = Math.random() * 1.5 + 0.5;
        }

        return [positions, sizes];
    }, []);

    // Create star texture
    const starTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');

        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.1, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.4, 'rgba(255, 200, 100, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 32, 32);

        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        return texture;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime() * 0.1;
        particlesRef.current.rotation.y = time * 0.05;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-size"
                    count={particlesCount}
                    array={sizes}
                    itemSize={1}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.5}
                map={starTexture}
                transparent={true}
                alphaMap={starTexture}
                alphaTest={0.001}
                opacity={1}
                sizeAttenuation={true}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

const LogoCube = () => {
    const meshRef = useRef();
    const scale = 15;
    const texture = useLoader(TextureLoader, logoUrl);

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.needsUpdate = true;

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.y = time * 0.3;
        meshRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
    });

    const materials = useMemo(() => {
        const material = new THREE.MeshPhysicalMaterial({
            map: texture,
            color: '#D7B58F',
            metalness: 0.6,
            roughness: 0.3,
            reflectivity: 0.5,
            clearcoat: 0.5,
            clearcoatRoughness: 0.2,
            emissive: '#D7B58F',
            emissiveIntensity: 0.12,
            transparent: false,
            side: THREE.DoubleSide
        });
        return Array(6).fill(material);
    }, [texture]);
    return (
        <mesh ref={meshRef} scale={[scale, scale, scale]} position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1, 12, 12, 12]} />
            {materials.map((material, index) => (
                <primitive key={index} object={material} attach={`material-${index}`} />
            ))}
        </mesh>
    );
};

const Scene = () => {
    return (
        <>
            <color attach="background" args={['#000000']} />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#D7B58F" />
            <directionalLight position={[0, 5, 5]} intensity={1.5} />
            <LogoCube />
            <StarField />
        </>
    );
};

export default function BannerBackground() {
    return (
        <div className={styles['canvas-container']}>
            <Canvas
                camera={{
                    position: [0, 0, 40],
                    fov: 75,
                    near: 0.1,
                    far: 1000
                }}
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    background: 'transparent'
                }}
                className={styles['canvas']}
            >
                <Scene />
            </Canvas>
        </div>
    );
}

