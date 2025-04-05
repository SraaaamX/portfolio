import React from 'react';
import ScrollAnimation from '../../Animation/ScrollAnimation';
import { AnimationSection } from '../../Animation/AnimationSection';
import styles from './ProjectsCards.module.sass';
import historysImg from '../../../../public/images/projects/historys.webp';
import xivImg from '../../../../public/images/projects/xiv.webp';
import diezImg from '../../../../public/images/projects/diez.webp';
import vscodeEssentialsImg from '../../../../public/images/projects/vscode_essentials.webp';

const projects = [
    {
        src: vscodeEssentialsImg,
        alt: 'Image du projet VSCode Essentials',
        title: 'VSCode Essentials',
        description: {
            title: 'Projet Personnel',
            space: '-',
            date: '2023'
        },
        link: 'https://marketplace.visualstudio.com/items?itemName=SraaaamXTheLordWolf.vscode-pack-essentials---ais'
    },
    {
        src: historysImg,
        alt: 'Image du projet History\'s',
        title: 'History\'s',
        description: {
            title: 'Projet de Partiels',
            space: '-',
            date: '2024'
        },
        link: 'https://history-s.jules-larue.mds-paris.yt/'
    },
    {
        src: xivImg,
        alt: 'Image du projet XIV',
        title: 'XIV',
        description: {
            title: 'Projet d\'entreprise',
            space: '-',
            date: '2024'
        },
        link: 'https://xivagency.fr/'
    },
    {
        src: diezImg,
        alt: 'Image du projet DIEZ Agency',
        title: 'DIEZ Agency',
        description: {
            title: 'Projet de Partiels',
            space: '-',
            date: '2024 / 2025'
        },
        link: 'https://www.figma.com/proto/6AszUR4AjLniT0brZKJdCa/DIEZ-Agency?page-id=0%3A1&node-id=18-544&viewport=334%2C-1392%2C0.28&t=cC9n0a5jqY5OFM1Z-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=18%3A544'
    },
];

const ProjectsCards = () => {
    return (
        <AnimationSection sectionName="projects">
            <div className={styles['projects-card-container']}>
                {projects.map((project, index) => (
                    <ScrollAnimation key={project.alt} delay={index * 0.1}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles['projects-card']}
                            title={project.title}
                        >
                            <figure className={styles['projects-card-img']}>
                                <img
                                    src={project.src}
                                    alt={project.alt}
                                    draggable="false"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>
                            <figcaption className={styles['projects-card-text']}>
                                <h3>{project.title}</h3>
                                <p>
                                    {project.description.title}
                                    <br />
                                    {project.description.space}
                                    <br />
                                    {project.description.date}
                                </p>
                            </figcaption>
                        </a>
                    </ScrollAnimation>
                ))}
            </div>
        </AnimationSection>
    );
};

export default ProjectsCards;
