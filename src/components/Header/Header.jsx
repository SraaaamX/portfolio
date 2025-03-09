import React, { useState } from 'react';
import { Link } from 'react-scroll';

import styles from './Header.module.sass';
import SecondaryButton from '../Buttons/Secondary/SecondaryButton';
import Navlinks from './Navlinks/Navlinks';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            // Le composant restera dans le DOM pendant 1s pour l'animation
            setTimeout(() => setShouldRender(false), 1000);
        } else {
            setIsMenuOpen(true);
            setShouldRender(true);
        }
    };

    const handleNavClick = (e) => {
        e?.preventDefault();
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles['logo-container']}>
                <figure className={styles.logo}>
                    <Link className='anchor'
                        to="banner"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-80}
                        easing="easeInOutQuart"
                    >
                        <img src=".src/assets/svg/logo.svg" alt="Logo" draggable="false" />
                    </Link>
                </figure>
            </div>
            <Navlinks onNavClick={handleNavClick} />
            <div className={styles['header-btn']}>
                <SecondaryButton to="footer">
                    Contacter
                </SecondaryButton>
            </div>
            <figure className={styles.burger} onClick={toggleMenu}>
                <img src=".src/assets/svg/burger.svg" alt="Burger" draggable="false" />
            </figure>

            {shouldRender && (
                <div className={`${styles['menu-burger']} ${!isMenuOpen ? styles['closing'] : ''}`}>
                    <figure className={styles['menu-burger-logo']}>
                        <Link className='anchor'
                            to="banner"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            offset={-80}
                            easing="easeInOutQuart"
                            onClick={handleNavClick}
                        >
                            <img src=".src/assets/svg/logo.svg" alt="Logo" draggable="false" />
                        </Link>
                    </figure>

                    <figure className={styles['menu-burger-cross']} onClick={toggleMenu}>
                        <img src=".src/assets/svg/cross.svg" alt="Cross" draggable="false" />
                    </figure>

                    <Navlinks
                        className={styles['menu-burger-navlinks']}
                        onNavClick={handleNavClick}
                    />

                    <div className={styles['menu-burger-btn']}>
                        <SecondaryButton
                            to="footer"
                            onClick={handleNavClick}
                        >
                            Contacter
                        </SecondaryButton>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
