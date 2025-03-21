import React from 'react';
import ScrollAnimation from '../Animation/ScrollAnimation';

import styles from './Banner.module.sass';
import MainButton from '../Buttons/Main/MainButton';
import BannerBackground from './BannerBackground/BannerBackground';

export default function Banner() {
    return (
        <section className={styles['banner']} id="banner">
            <BannerBackground />
            <ScrollAnimation noScroll={true}>
                <div className={styles['banner-cta']}>
                    <h2>Développeur WEB Fullstack</h2>
                    <h1><strong className={styles.highlight}>Jules LARUE</strong> - Donnez vie à vos idées.</h1>
                    <MainButton to="footer" children="Me Contacter" />
                </div>
            </ScrollAnimation>
        </section>
    );
}
