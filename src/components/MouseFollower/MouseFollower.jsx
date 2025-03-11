import { useState, useEffect, useCallback } from 'react';
import styles from './MouseFollower.module.sass';

export const MouseFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const updatePosition = useCallback((e) => {
        requestAnimationFrame(() => {
            setPosition({ x: e.clientX, y: e.clientY });
        });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', updatePosition);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('resize', handleResize);
        };
    }, [updatePosition]);

    if (windowWidth <= 1024) {
        return null;
    }

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
