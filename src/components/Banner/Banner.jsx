import React from 'react';

import styles from './Banner.module.sass';
import MainButton from '../Buttons/Main/MainButton';
import BannerBackground from './BannerBackground/BannerBackground';

export default function Banner() {
    return (
        <section className={styles['banner']} id="banner">
            <BannerBackground />
            <div className={styles['banner-cta']}>
                <h2>Développeur WEB Fullstack</h2>
                <h1><span className={styles.highlight}>Jules LARUE</span> - Donnez vie à vos idées.</h1>
                <MainButton to="footer" children="Me Contacter" />
            </div>
        </section>
    );
}
