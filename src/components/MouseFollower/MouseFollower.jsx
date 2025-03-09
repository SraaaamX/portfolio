import { useState, useEffect, useCallback } from 'react';
import styles from './MouseFollower.module.sass';

export const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updatePosition = useCallback((e) => {
        requestAnimationFrame(() => {
            setPosition({ x: e.clientX, y: e.clientY });
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, [updatePosition]);

    return (
        <div
            className={styles.follower}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

export default MouseFollower;
