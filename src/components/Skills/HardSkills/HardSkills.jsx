import React from 'react';
import styles from './HardSkills.module.sass';
import HardSkillsIcons from './HardSkillsIcons/HardSkillsIcons';

const HardSkills = () => {
    return (
        <section className={styles['hard-skills-container']}>
            <div className={styles['hard-skills-text']}>
                <h2 className={styles['hard-skills-title']}>Hard Skills</h2>
                <p className={styles['hard-skills-paragraph']}>Découvrez mes Hard Skills</p>
            </div>
            <HardSkillsIcons />
        </section>
    );
};

export default HardSkills;

