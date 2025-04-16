import React from 'react';
import styles from './Projects.module.sass';
import ProjectsCards from './ProjectsCards/ProjectsCards';
import TopRightParticles from '../WaveParticles/TopRight/TopRightParticles';

const Projects = () => {
    return (
        <section className={`${styles['projects-container']} ${styles['container']}`}>
            <TopRightParticles />
            <div className={styles['projects-text']}>
                <h2>Mes Projets</h2>
                <p>Découvrez mes projets</p>
            </div>
            <ProjectsCards />
        </section>
    );
};

export default Projects;
