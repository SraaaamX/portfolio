import styles from './Separator.module.sass';

export default function Separator({ id }) {
    return (
        <section className={styles.separator} id={id}>
            <div className={styles.line}></div>
        </section>
    );
}

