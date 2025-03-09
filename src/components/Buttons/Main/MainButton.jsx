import React from 'react';
import { Link } from 'react-scroll';
import styles from './MainButton.module.sass';

function MainButton({ children, to, href, onClick }) {
    if (href) {
        return (
            <a
                className={styles['main-btn']}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            className={`${styles['main-btn']} ${styles.anchor}`}
            to={to}
            spy={true}
            smooth={true}
            duration={1000}
            offset={-80}
            easing="easeInOutQuart"
            onClick={onClick}
        >
            {children}
        </Link>
    );
}

export default MainButton;


