import React from 'react';
import ScrollAnimation from '../../Animation/ScrollAnimation';
import { AnimationSection } from '../../Animation/AnimationSection';
import styles from './HardSkills.module.sass';
import HardSkillsIcons from './HardSkillsIcons/HardSkillsIcons';

const HardSkills = () => {
    return (
        <AnimationSection sectionName="hardskills">
            <section className={`${styles['hard-skills-container']} ${styles['container']}`}>
                <ScrollAnimation>
                    <div className={styles['hard-skills-text']}>
                        <h2 className={styles['hard-skills-title']}>Hard Skills</h2>
                        <p className={styles['hard-skills-paragraph']}>Découvrez mes Hard Skills</p>
                    </div>
                </ScrollAnimation>
                <HardSkillsIcons />
            </section>
        </AnimationSection>
    );
};

export default HardSkills;
