import React from 'react';
import { Link } from 'react-scroll';
import styles from './UpArrow.module.sass';

export default function UpArrow() {
    return (
        <figure className={styles['up-arrow']}>
            <Link className='anchor'
                to="banner"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-80}
                easing="easeInOutQuart"
            >
                <img src="./src/assets/svg/up_arrow.svg" alt="Flèche vers le haut" draggable="false" />
            </Link>
        </figure>
    );
}

