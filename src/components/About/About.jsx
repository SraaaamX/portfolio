import React from 'react';
import styles from './About.module.sass';
import MainButton from '../Buttons/Main/MainButton';

export default function About() {
    return (
        <section className={styles['about-container']}>
            <div className={styles['about-first']}>
                <h2 className={styles['about-title']}>Bonjour, je suis <span className={styles.highlight}>Jules LARUE</span></h2>
                <div className={styles['about-text']}>
                    <p>
                        Passionné par le développement web, j'aime concevoir des sites modernes et responsives qui
                        transforment des idées en expériences accessibles. Chaque défi est une occasion d'apprendre,
                        d'innover et de mêler technique et créativité pour donner vie à des projets uniques.
                    </p>
                </div>
                <MainButton
                    href="https://drive.google.com/file/d/149pTvMYwe5ed0gFyd0FTB1VQKganaf1I/view?usp=sharing"
                    children="Mon CV"
                    target="_blank"
                />
            </div>
            <figure className={styles['about-img']} alt="Photo de profil">
                <img src="/src/assets/img/profile.webp" alt="Photo de profil" draggable="false" />
            </figure>
        </section>
    );
}


