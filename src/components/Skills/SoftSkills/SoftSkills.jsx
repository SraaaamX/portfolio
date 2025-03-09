import React from 'react';
import ScrollAnimation from '../../Animation/ScrollAnimation';
import { AnimationSection } from '../../Animation/AnimationSection';
import styles from './SoftSkills.module.sass';

const softSkillsData = [
    {
        title: 'Curieux',
        description: 'La curiosité stimule mon apprentissage des technologies et nourrit ma créativité pour innover et résoudre des problèmes.'
    },
    {
        title: 'Dynamique',
        description: 'Mon dynamisme favorise mon adaptation, ma motivation et mon efficacité face aux défis.'
    },
    {
        title: "Esprit D'équipe",
        description: "L'esprit d'équipe me motive à collaborer, partager des idées et atteindre des objectifs communs."
    }
];

const SoftSkills = () => {
    return (
        <AnimationSection sectionName="softskills">
            <section className={styles['soft-skills-container']}>
                <ScrollAnimation>
                    <div className={styles['soft-skills-text']}>
                        <h2 className={styles['soft-skills-title']}>Soft Skills</h2>
                        <p className={styles['soft-skills-paragraph']}>Découvrez mes Soft Skills</p>
                    </div>
                </ScrollAnimation>
                <div className={styles['soft-skills-columns']}>
                    {softSkillsData.map((skill) => (
                        <div className={styles['soft-skills-column']} key={skill.title}>
                            <ScrollAnimation delay={0.2}>
                                <h3 className={styles['soft-skills-column-title']}>{skill.title}</h3>
                            </ScrollAnimation>
                            <ScrollAnimation delay={0.4}>
                                <p className={styles['soft-skills-column-paragraph']}>
                                    {skill.description}
                                </p>
                            </ScrollAnimation>
                        </div>
                    ))}
                </div>
            </section>
        </AnimationSection>
    );
};

export default SoftSkills;

