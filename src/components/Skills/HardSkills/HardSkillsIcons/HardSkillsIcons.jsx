import React from 'react';
import styles from './HardSkillsIcons.module.sass';
import htmlIcon from '../../../../assets/img/icons/html.webp';
import cssIcon from '../../../../assets/img/icons/css.webp';
import jsIcon from '../../../../assets/img/icons/js.webp';
import phpIcon from '../../../../assets/img/icons/php.webp';
import sqlIcon from '../../../../assets/img/icons/sql.webp';
import sassIcon from '../../../../assets/img/icons/sass.webp';
import reactIcon from '../../../../assets/img/icons/react.webp';
import vueIcon from '../../../../assets/img/icons/vue.webp';
import angularIcon from '../../../../assets/img/icons/angular.webp';
import wordpressIcon from '../../../../assets/img/icons/wordpress.webp';
import pythonIcon from '../../../../assets/img/icons/python.webp';
import figmaIcon from '../../../../assets/img/icons/figma.webp';

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
            {icons.map(icon => (
                <figure key={icon.alt} className={styles['icon-figure']}>
                    <img src={icon.src} alt={icon.alt} className={styles['icon']} draggable="false" />
                </figure>
            ))}
        </div>
    );
};

export default HardSkillsIcons;
