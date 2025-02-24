import styles from "./goodCompany.module.css";
import akelius from "../assets/clients/akelius.webp";
import AktieAnsvar from "../assets/clients/aktieansvar.webp";
import AkzoNobel from "../assets/clients/akzonobel.webp";
import GP from "../assets/clients/gp.webp";
import Scania from "../assets/clients/scania.webp";
import skf from "../assets/clients/skf.webp";
import stena from "../assets/clients/stena.webp";
import svt from "../assets/clients/svt.webp";
import volvo from "../assets/clients/volvo.webp";

export const GoodCompany = () => {
  return (
    <section className={styles.goodCompany}>
      <div className="container">
        <h2>You're in good company</h2>
        {/* <p>
          <ui-scroll-reveal finish="20">
            I've been working with clients like <em>Scania</em>,{" "}
            <em>Stena Line</em>, <em>Stena Renewable</em>, <em>Medivir</em>,{" "}
            <em>Svt</em>, <em>Göteborgs-Posten</em>, <em>Volvo</em>,{" "}
            <em>Akzo-Nobel</em>, <em>Telia</em> and many smaller businesses and
            lovely startups. Currently I am working with <em>SKF</em> in their
            design-system-team that supports their brigade of application
            developers globally.
          </ui-scroll-reveal>
        </p> */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={akelius} alt="Akelius" />
          </div>
          <div className={styles.card}>
            <img src={AktieAnsvar} alt="Aktie Ansvar" />
          </div>
          <div className={styles.card}>
            <img src={AkzoNobel} alt="Akzo Nobel" />
          </div>
          <div className={styles.card}>
            <img src={GP} alt="Göteborgs-Posten" />
          </div>
          <div className={styles.card}>
            <img src={Scania} alt="Scania" />
          </div>
          <div className={styles.card}>
            <img src={skf} alt="SKF" />
          </div>
          <div className={styles.card}>
            <img src={stena} alt="Stena" />
          </div>
          <div className={styles.card}>
            <img src={svt} alt="Sveriges Television / Robinson" />
          </div>
          <div className={styles.card}>
            <img src={volvo} alt="Volvo" />
          </div>
        </div>
      </div>
    </section>
  );
};
