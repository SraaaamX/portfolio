import React from 'react';
import { Link } from 'react-scroll';
import styles from './Navlinks.module.sass';

const navlinks = [
    {
        title: 'À Propos',
        to: 'about-container',
        offset: -80,
    },
    {
        title: 'Skills',
        to: 'soft-skills-container',
        offset: -80,
    },
    {
        title: 'Projets',
        to: 'projects-container',
        offset: -80,
    },
];

const Navlinks = ({ className, onNavClick }) => {
    return (
        <nav className={`${styles.navlinks} ${className || ''}`}>
            <ul className={styles.navlinks__list}>
                {navlinks.map(({ title, to, offset }) => (
                    <li className={styles.navlinks__list__item} key={title}>
                        <Link
                            className='anchor'
                            to={to}
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={offset}
                            easing="easeInOutQuart"
                            onClick={onNavClick}
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Navlinks;

