import styles from "./BigHeadlines.module.css";
import bigHeadlines from "./bigHealines.svg";

export const BigHeadlines = () => {
  return (
    <section className={styles.headlines}>
      <img src={bigHeadlines} alt="Big headlines" />
    </section>
  );
};
