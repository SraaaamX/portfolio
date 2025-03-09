import React from 'react';
import { Link } from 'react-scroll';
import styles from './SecondaryButton.module.sass';

function SecondaryButton({ children, to, href, onClick }) {
    if (href) {
        return (
            <a
                className={styles['secondary-btn']}
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
            className={`${styles['secondary-btn']} ${styles.anchor}`}
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

export default SecondaryButton;

