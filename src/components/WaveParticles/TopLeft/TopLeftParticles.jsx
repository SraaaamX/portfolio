import React from 'react';
import topLeftParticles from '../../../../public/svg/top_left_wave_particles.svg';
import styles from './TopLeftParticles.module.sass';

export default function TopLeftParticles() {
    return (
        <figure aria-hidden="true" className={styles['top-left-particles']} role="presentation">
            <img src={topLeftParticles} alt="Particules d'ondes dans le coin sup rieur gauche du site web, ajoutant un toucher d'élégance et de sophistication au design." />
        </figure>
    );
}

