import React from 'react';
import styles from './SoftSkills.module.sass';

const SoftSkills = () => {
    return (
        <section className={styles['soft-skills-container']}>
            <div className={styles['soft-skills-text']}>
                <h2 className={styles['soft-skills-title']}>Soft Skills</h2>
                <p className={styles['soft-skills-paragraph']}>Découvrez mes Soft Skills</p>
            </div>
            <div className={styles['soft-skills-columns']}>
                <div className={styles['soft-skills-column']}>
                    <h3 className={styles['soft-skills-column-title']}>Curieux</h3>
                    <p className={styles['soft-skills-column-paragraph']}>
                        La curiosité stimule mon apprentissage des technologies et nourrit ma créativité pour innover et résoudre des problèmes.
                    </p>
                </div>
                <div className={styles['soft-skills-column']}>
                    <h3 className={styles['soft-skills-column-title']}>Dynamique</h3>
                    <p className={styles['soft-skills-column-paragraph']}>
                        Mon dynamisme favorise mon adaptation, ma motivation et mon efficacité face aux défis.
                    </p>
                </div>
                <div className={styles['soft-skills-column']}>
                    <h3 className={styles['soft-skills-column-title']}>Esprit D’équipe</h3>
                    <p className={styles['soft-skills-column-paragraph']}>
                        L’esprit d’équipe me motive à collaborer, partager des idées et atteindre des objectifs communs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SoftSkills;


