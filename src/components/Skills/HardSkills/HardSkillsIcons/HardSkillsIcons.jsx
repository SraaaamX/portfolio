import React from 'react';
import styles from './HardSkillsIcons.module.sass';

const icons = [
    { src: 'src/assets/img/icons/html.webp', alt: 'HTML' },
    { src: 'src/assets/img/icons/css.webp', alt: 'CSS' },
    { src: 'src/assets/img/icons/js.webp', alt: 'JavaScript' },
    { src: 'src/assets/img/icons/php.webp', alt: 'PHP' },
    { src: 'src/assets/img/icons/sql.webp', alt: 'SQL' },
    { src: 'src/assets/img/icons/sass.webp', alt: 'Sass' },
    { src: 'src/assets/img/icons/react.webp', alt: 'React' },
    { src: 'src/assets/img/icons/vue.webp', alt: 'Vue' },
    { src: 'src/assets/img/icons/angular.webp', alt: 'Angular' },
    { src: 'src/assets/img/icons/wordpress.webp', alt: 'WordPress' },
    { src: 'src/assets/img/icons/python.webp', alt: 'Python' },
    { src: 'src/assets/img/icons/figma.webp', alt: 'Figma' },
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