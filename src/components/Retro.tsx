import styles from "./retro.module.css";

export const Retro = () => {
  return (
    <section className={styles.retro}>
      <h2>1996</h2>

      <div>
        <p>
          <ui-text-reveal finish="40">
            I started my journey by creating an e-commerce website. Biggest
            challenge was making it work cross-browser with Netscape's
            Javascript vs. Explorers JScript and making it look good before we
            had CSS.
            <br />
            <br />
            Interestingly, my second project, more or less, was to create an
            online bank. Good times :)
          </ui-text-reveal>
        </p>
      </div>

      <svg width="0" height="0">
        <filter
          id="split"
          colorInterpolationFilters="sRGB"
          x="0"
          y="0"
          width="500%"
          height="500%"
        >
          <feColorMatrix
            values="0 0 0 0 0.9058823529
                                 0 0 0 0 0.662745098
                                 0 0 0 0 0.4274509804
                                 0 1 0 0 0"
            in="SourceGraphic"
          />
          <feGaussianBlur stdDeviation="1" />
          <feOffset dy="-30" result="top-1"></feOffset>
          <feColorMatrix
            values="0 0 0 0 0.8705882353
                                 0 0 0 0 0.4196078431
                                 0 0 0 0 0.2039215686
                                 0 1 0 0 0"
            in="SourceGraphic"
          />
          <feGaussianBlur stdDeviation="2" />
          <feOffset dy="-60" result="top-2"></feOffset>
          <feColorMatrix
            values="0 0 0 0 0.8509803922
                                 0 0 0 0 0.2941176471
                                 0 0 0 0 0.1450980392
                                 0 1 0 0 0"
            in="SourceGraphic"
          />
          <feGaussianBlur stdDeviation="3" />
          <feOffset dy="-90" result="top-3"></feOffset>
          <feColorMatrix
            values="0 0 0 0 0.5294117647
                                 0 0 0 0 0.7333333333
                                 0 0 0 0 0.6470588235
                                 -1 -1 3 0 0"
            in="SourceGraphic"
          />
          <feGaussianBlur stdDeviation="1" />
          <feOffset dy="30" result="bottom-1"></feOffset>
          <feColorMatrix
            values="0 0 0 0 0.1960784314
                                 0 0 0 0 0.5411764706
                                 0 0 0 0 0.5803921569
                                 -1 -1 3 0 0"
            in="SourceGraphic"
          />
          <feGaussianBlur stdDeviation="2" />
          <feOffset dy="60" result="bottom-2"></feOffset>
          <feColorMatrix
            values="0 0 0 0 0.1098039216
                                 0 0 0 0 0.3333333333
                                 0 0 0 0 0.4470588235
                                 -1 -1 3 0 0"
            in="SourceGraphic"
          />
          <feGaussianBlur stdDeviation="3" />
          <feOffset dy="90" result="bottom-3"></feOffset>
          <feColorMatrix
            values="0 0 0 0 0.968627451
                                 0 0 0 0 0.8980392157
                                 0 0 0 0 0.7176470588
                                 1 0 0 0 0"
            in="SourceGraphic"
          />
          <feBlend in="top-1"></feBlend>
          <feBlend in="top-2"></feBlend>
          <feBlend in="top-3"></feBlend>
          <feBlend in="bottom-1"></feBlend>
          <feBlend in="bottom-2"></feBlend>
          <feBlend in="bottom-3"></feBlend>
        </filter>
      </svg>
    </section>
  );
};
