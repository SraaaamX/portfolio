import React from 'react';
import ScrollAnimation from '../../../Animation/ScrollAnimation';
import styles from './HardSkillsIcons.module.sass';
import htmlIcon from '../../../../../public/images/skills/html.webp';
import cssIcon from '../../../../../public/images/skills/css.webp';
import sassIcon from '../../../../../public/images/skills/sass.webp';
import jsIcon from '../../../../../public/images/skills/js.webp';
import tsIcon from '../../../../../public/images/skills/ts.webp';
import nodeJsIcon from '../../../../../public/images/skills/nodejs.webp';
import prismaIcon from '../../../../../public/images/skills/prisma.webp';
import phpIcon from '../../../../../public/images/skills/php.webp';
import mySqlIcon from '../../../../../public/images/skills/mysql.webp';
import pythonIcon from '../../../../../public/images/skills/python.webp';
import reactIcon from '../../../../../public/images/skills/react.webp';
import vueIcon from '../../../../../public/images/skills/vue.webp';
import angularIcon from '../../../../../public/images/skills/angular.webp';
import expressJsIcon from '../../../../../public/images/skills/expressjs.webp';
import laravelIcon from '../../../../../public/images/skills/laravel.webp';
import wordpressIcon from '../../../../../public/images/skills/wordpress.webp';
import figmaIcon from '../../../../../public/images/skills/figma.webp';
import gitIcon from '../../../../../public/images/skills/git.webp';
import dockerIcon from '../../../../../public/images/skills/docker.webp';
import windowsIcon from '../../../../../public/images/skills/windows.webp';
import linuxIcon from '../../../../../public/images/skills/linux.webp';

const icons = [
    { src: htmlIcon, alt: 'HTML' },
    { src: cssIcon, alt: 'CSS' },
    { src: sassIcon, alt: 'Sass' },
    { src: jsIcon, alt: 'JavaScript' },
    { src: tsIcon, alt: 'TypeScript' },
    { src: nodeJsIcon, alt: 'Node.js' },
    { src: prismaIcon, alt: 'Prisma' },
    { src: phpIcon, alt: 'PHP' },
    { src: mySqlIcon, alt: 'SQL' },
    { src: pythonIcon, alt: 'Python' },
    { src: reactIcon, alt: 'React' },
    { src: vueIcon, alt: 'Vue' },
    { src: angularIcon, alt: 'Angular' },
    { src: expressJsIcon, alt: 'Express.js' },
    { src: laravelIcon, alt: 'Laravel' },
    { src: wordpressIcon, alt: 'WordPress' },
    { src: figmaIcon, alt: 'Figma' },
    { src: gitIcon, alt: 'Git' },
    { src: dockerIcon, alt: 'Docker' },
    { src: windowsIcon, alt: 'Windows' },
    { src: linuxIcon, alt: 'Linux' },
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
