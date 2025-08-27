import { JSX } from "react";
import styles from "@styles/project-card.module.css";

export default function ProjectCard(): JSX.Element {
    return (
        <div className={styles.cardBrighten}>
            <span
                role="presentation"
                className={`${styles.floatLabel} ${styles.labelSuccess}`}
            >In development</span>
            <figure className={styles.figureExpand}>

                <img
                    src="/img/placeholder.svg"
                />
            </figure>
            <div className={styles.cardContent}>
                <div>
                    <h3 className={styles.projectName}>Whisper</h3>
                    <span className={styles.projectDetails}>Real-time Communication App</span>
                </div>
                <p className={styles.projectDescription}>
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Excepturi fugiat ea
                    autem possimus, eos officia impedit
                    mollitia accusamus reiciendis molestias
                    aliquid quos voluptatibus ad voluptatem
                    optio nobis, quibusdam ducimus atque!
                </p>
                <div className={styles.tagContainer}>
                    <span className={styles.tag}>Servers</span>
                    <span className={styles.tag}>Channels</span>
                    <span className={styles.tag}>RTC</span>
                </div>
                <button
                    type="button"
                    className={styles.learnMore}
                >
                    <span>Learn more</span>
                    <i className="bi bi-box-arrow-up-right"></i>
                </button>

            </div>
        </div>
    );
}