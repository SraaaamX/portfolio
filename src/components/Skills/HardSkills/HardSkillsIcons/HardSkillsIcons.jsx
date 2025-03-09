import React from 'react';
import ScrollAnimation from '../../../Animation/ScrollAnimation';
import styles from './HardSkillsIcons.module.sass';
import htmlIcon from '../../../../assets/images/skills/html.webp';
import cssIcon from '../../../../assets/images/skills/css.webp';
import jsIcon from '../../../../assets/images/skills/js.webp';
import phpIcon from '../../../../assets/images/skills/php.webp';
import sqlIcon from '../../../../assets/images/skills/sql.webp';
import sassIcon from '../../../../assets/images/skills/sass.webp';
import reactIcon from '../../../../assets/images/skills/react.webp';
import vueIcon from '../../../../assets/images/skills/vue.webp';
import angularIcon from '../../../../assets/images/skills/angular.webp';
import wordpressIcon from '../../../../assets/images/skills/wordpress.webp';
import pythonIcon from '../../../../assets/images/skills/python.webp';
import figmaIcon from '../../../../assets/images/skills/figma.webp';

const icons = [
    { src: htmlIcon, alt: 'HTML' },
    { src: cssIcon, alt: 'CSS' },
    { src: jsIcon, alt: 'JavaScript' },
    { src: phpIcon, alt: 'PHP' },
    { src: sqlIcon, alt: 'SQL' },
    { src: sassIcon, alt: 'Sass' },
    { src: reactIcon, alt: 'React' },
    { src: vueIcon, alt: 'Vue' },
    { src: angularIcon, alt: 'Angular' },
    { src: wordpressIcon, alt: 'WordPress' },
    { src: pythonIcon, alt: 'Python' },
    { src: figmaIcon, alt: 'Figma' },
];

const HardSkillsIcons = () => {
    return (
        <div className={styles['hard-skills-icons-container']}>
            {icons.map((icon, index) => (
                <ScrollAnimation key={icon.alt} delay={index * 0.1}>
                    <figure className={styles['icon-figure']}>
                        <img src={icon.src} alt={icon.alt} className={styles['icon']} draggable="false" />
                    </figure>
                </ScrollAnimation>
            ))}
        </div>
    );
};

export default HardSkillsIcons;
