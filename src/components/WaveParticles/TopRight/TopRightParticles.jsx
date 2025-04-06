import React from 'react';
import topRightParticles from '../../../../public/svg/top_right_wave_particles.svg';
import styles from './TopRightParticles.module.sass';

export default function TopRightParticles() {
    return (
        <figure aria-hidden="true" className={styles['top-right-particles']} role="presentation">
            <img src={topRightParticles} alt="Particules d'ondes dans le coin supérieur droit du site web, ajoutant un toucher d'élégance et de sophistication au design." />
        </figure>
    );
}
