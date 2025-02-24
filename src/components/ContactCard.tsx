import styles from "./contactCard.module.css";
import nicolashervy from "../assets/nicolas_hervy.webp";

export const ContactCard = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/nicolashervy/", "_blank");
  };

  return (
    <section className={`animated ${styles.contactCard}`}>
      <div className={styles.card}>
        <h3 className={styles.card__title}>Nicolas Hervy</h3>
        <img
          className={styles.card__image}
          src={nicolashervy}
          alt="Nicolas Hervy"
          width="525"
          height="589"
          loading="lazy"
        />
        <div className={styles.card__details}>
          Web Developer <br />
          with a focus on frontend technologies.
        </div>
        <button
          className={styles.card__action}
          type="button"
          onClick={handleClick}
        >
          Linkedin
        </button>
      </div>
    </section>
  );
};
