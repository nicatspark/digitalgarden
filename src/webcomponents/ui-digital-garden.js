import { html, css } from "lit";
import { BaseClass } from "./baseComponent.js";

export class UiDigitalGarden extends BaseClass {
  #observer;
  #typedOut = false;
  typestate;

  static properties = {
    offset: { type: Number },
    noGlow: { type: Boolean, attribute: "no-glow", reflect: true },
    noGlitch: { type: Boolean, attribute: "no-glitch", reflect: true },
    noTyping: { type: Boolean, attribute: "no-typing", reflect: true },
    delay: { type: Number },
    theme: { type: String },
    typedIn: { type: Boolean, attribute: "typed-in", reflect: true },
  };

  static styles = css`
    :host {
      display: block;
      width: fit-content;
      contain: layout;
      box-sizing: border-box;
      margin: calc(var(--offset, 0) * -1);
      aspect-ratio: 846 / 96;
      color-scheme: light dark;

      --slice-0: inset(50% 50% 50% 50%);
      --slice-1: inset(80% -6px 0 0);
      --slice-2: inset(50% -6px 30% 0);
      --slice-3: inset(10% -6px 85% 0);
      --slice-4: inset(40% -6px 43% 0);
      --slice-5: inset(80% -6px 5% 0);
    }

    div {
      max-width: 100%;

      :host(:not([no-glitch])) & {
        animation: /*cyberpunk-glitch 7s step-end infinite
            ,*/ skew-glitch
          17s step-end infinite;
      }

      &[data-theme="dark"] {
        color-scheme: dark;
      }

      &[data-theme="light"] {
        color-scheme: light;
      }
    }

    svg {
      --brand-color: light-dark(
        oklch(0.53 0.11 64),
        oklch(1 0.21 113)
      ); /* hsl(32deg 72% 34%), hsl(113deg 72% 38%) */
      aspect-ratio: 846 / 96;
      max-width: inherit;
    }

    :host(:not([no-glow])) svg > g[id="global"] {
      filter: drop-shadow(2px 4px 7px hsl(from var(--brand-color) h s l / 40%))
        blur(1px) contrast(3);
      transform: translate(var(--offset-x, 20px), 10px) scale(0.8);
    }
    g > g.letter {
      fill: var(--brand-color);
    }
    g > g[id="cursor"] {
      animation: cursor 2s infinite;
      transition: transform 0.05s;

      rect {
        fill: hsl(from var(--brand-color) h calc(s - 10) calc(l + 10));
        animation: cursor 2s infinite;
        animation-delay: calc(0.1s * var(--count, 0));
        filter: blur(1px) drop-shadow(3px);
      }
    }

    @keyframes cursor {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 1;
      }
      30% {
        opacity: 0.7;
      }
      40% {
        opacity: 1;
      }
      75% {
        opacity: 1;
      }
      80% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes cyberpunk-glitch {
      0% {
        clip-path: polygon(
          22% 73%,
          66% 9%,
          1% 86%,
          16% 52%,
          62% 84%,
          40% 39%,
          43% 79%,
          85% 93%,
          96% 59%,
          27% 97%,
          94% 20%,
          24% 22%,
          65% 94%,
          3% 56%,
          65% 88%,
          72% 99%,
          30% 81%,
          15% 93%,
          11% 24%,
          5% 63%,
          84% 7%,
          12% 88%,
          4% 44%,
          42% 19%,
          60% 68%,
          3% 41%
        );
      }
      4% {
        clip-path: polygon(
          21% 70%,
          66% 20%,
          37% 17%,
          19% 59%,
          2% 82%,
          10% 83%,
          11% 54%,
          28% 52%,
          88% 98%,
          96% 17%,
          57% 81%,
          93% 89%,
          86% 15%,
          100% 12%,
          96% 73%,
          81% 35%,
          72% 48%,
          50% 97%,
          24% 87%,
          4% 72%,
          18% 34%,
          4% 3%,
          18% 30%,
          3% 44%,
          10% 46%,
          14% 57%
        );
      }
      27% {
        clip-path: polygon(
          65% 56%,
          86% 8%,
          60% 31%,
          17% 45%,
          74% 52%,
          22% 76%,
          99% 49%,
          28% 2%,
          45% 11%,
          29% 63%,
          89% 29%,
          35% 18%,
          58% 69%,
          50% 74%,
          66% 9%,
          87% 97%,
          40% 5%,
          64% 83%,
          49% 86%,
          70% 27%,
          67% 35%,
          94% 53%,
          59% 70%,
          71% 41%,
          79% 94%,
          45% 19%
        );
      }
      51% {
        clip-path: polygon(
          29% 18%,
          47% 82%,
          61% 43%,
          61% 9%,
          63% 71%,
          50% 37%,
          78% 37%,
          74% 76%,
          27% 62%,
          63% 99%,
          79% 43%,
          98% 40%,
          56% 56%,
          94% 5%,
          62% 77%,
          92% 40%,
          50% 34%,
          17% 52%,
          94% 13%,
          33% 77%,
          85% 43%,
          40% 69%,
          47% 38%,
          41% 32%,
          21% 64%,
          96% 57%
        );
      }
      66% {
        clip-path: polygon(
          44% 10%,
          79% 91%,
          11% 9%,
          14% 7%,
          69% 98%,
          8% 6%,
          50% 22%,
          29% 50%,
          56% 29%,
          76% 30%,
          90% 18%,
          91% 64%,
          18% 57%,
          36% 66%,
          75% 2%,
          28% 95%,
          51% 76%,
          94% 30%,
          74% 73%,
          9% 6%,
          91% 50%,
          27% 84%,
          65% 82%,
          23% 41%,
          18% 82%,
          55% 91%
        );
      }
      91% {
        clip-path: polygon(
          41% 84%,
          79% 68%,
          87% 28%,
          98% 57%,
          84% 73%,
          40% 83%,
          94% 87%,
          39% 69%,
          24% 65%,
          75% 82%,
          96% 23%,
          66% 80%,
          50% 81%,
          55% 9%,
          85% 42%,
          76% 8%,
          28% 55%,
          85% 50%,
          1% 99%,
          77% 18%,
          51% 80%,
          38% 72%,
          79% 64%,
          45% 94%,
          85% 73%,
          46% 10%
        );
      }

      1%,
      5%,
      28%,
      53%,
      67%,
      92% {
        clip-path: none;
      }
    }

    /* https://codepen.io/stevenlei/pen/ZEpyBod */
    @keyframes glitch {
      0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
      }
      10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
      }
      20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
      }
      30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
      }
      40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
      }
      50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
      }
      60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
      }
      70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
      }
      80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
      }
      90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
      }
      100% {
        clip-path: var(--slice-1);
        transform: translate(0);
      }
    }

    @keyframes skew-glitch {
      0% {
        transform: skew(83deg, 2deg) scaleY(0.25);
      }
      27% {
        transform: skew(-83deg, 2deg) scaleY(0.25);
      }
      66% {
        transform: skew(93deg, -2deg) scaleY(0.25);
      }
      91% {
        transform: skew(-89deg, -2deg) scaleY(0.25);
      }
      1%,
      28%,
      67%,
      92% {
        transform: none;
      }
    }

    /* maybe use this another day https://codepen.io/YusukeNakaya/pen/rNWOMWg */

    svg.letter_0 #global {
      .letter {
        display: none;
      }
      #cursor {
        transform: translate(-801px, 0);
      }
    }

    svg.letter_1 #global {
      .letter#D1 ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(64px - 801px), 0);
      }
    }

    svg.letter_2 #global {
      .letter#I1 ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(90px - 801px), 0);
      }
    }

    svg.letter_3 #global {
      .letter#G1 ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(156px - 801px), 0);
      }
    }

    svg.letter_4 #global {
      .letter#I2 ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(181px - 801px), 0);
      }
    }

    svg.letter_5 #global {
      .letter#T ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(247px - 801px), 0);
      }
    }

    svg.letter_6 #global {
      .letter#A1 ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(313px - 801px), 0);
      }
    }

    svg.letter_7 #global {
      .letter#L ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(399px - 801px), 0);
      }
    }

    svg.letter_8 #global {
      .letter#G2 ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(464px - 801px), 0);
      }
    }

    svg.letter_9 #global {
      .letter#A2 ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(530px - 801px), 0);
      }
    }

    svg.letter_10 #global {
      .letter#R ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(596px - 801px), 0);
      }
    }

    svg.letter_11 #global {
      .letter#D2 ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(661px - 801px), 0);
      }
    }

    svg.letter_12 #global {
      .letter#E ~ .letter {
        display: none;
      }
      #cursor {
        transform: translate(calc(727px - 801px), 0);
      }
    }

    svg.letter_13 #global {
      #cursor {
        transform: translate(calc(801px - 801px), 0);
      }
    }
  `;

  constructor() {
    super();
    this.theme = "light";
    this.delay = 0;
    this.addEventListener("typeback", () =>
      this._typeLetters({ reverse: true }).then(() => {
        this.emit("typed-back");
      }),
    );
    this.addEventListener("typeforward", () =>
      this._typeLetters({ reverse: false }).then(() => {
        this.emit("typed-forward");
      }),
    );
  }

  firstUpdated() {
    if (this.offset) this.style.setProperty("--offset", this.offset + "px");
    this._startThemeObserver();
    if (parseInt(getComputedStyle(this).width) <= 350) this.noGlow = true;
    if (!this.noTyping) this._typeLetters({ startDelay: this.delay });
    if (this.typedIn) this._startRetracted();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#observer.disconnect();
  }

  _startRetracted() {
    const svg = this.shadowRoot.querySelector("svg");
    svg.classList.add("letter_0");
    this.typestate = "typed-in";
  }

  _typeLetters = async ({ startDelay = 0 } = {}) => {
    this.typestate = "typing";
    const { promise, resolve } = Promise.withResolvers();
    const reverse = this.#typedOut ? true : false;
    this.#typedOut = !this.#typedOut;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const letters = this.shadowRoot.querySelectorAll(".letter");
    const svg = this.shadowRoot.querySelector("svg");
    for (let i = 0; i <= letters.length + 1; i++) {
      const y = reverse ? letters.length - i : i;
      if (!reverse && i === 1) await wait(startDelay);
      setTimeout(
        () => {
          if ((!reverse && i > 0) || (reverse && y >= 0))
            svg.classList.remove(`letter_${reverse ? y + 1 : y - 1}`);
          if (i <= 13 && i >= 0) svg.classList.add(`letter_${y}`);
          if (i === letters.length + 1) resolve("done");
        },
        i * 100 + Math.random() * 100,
      );
    }
    if (this.#typedOut) {
      setTimeout(
        () => {
          this._fireMajorGlitch();
          this.emit("major-glitch");
        },
        letters.length * 100 + 2000,
      );
    }
    promise.then(() => (this.typestate = reverse ? "typed-in" : "typed-out"));
    return promise;
  };

  _fireMajorGlitch(andHide = false) {
    const svg = this.shadowRoot.querySelector("svg");
    svg.style.animation = "1s glitch steps(2, end)";
    if (andHide) svg.style.clipPath = "var(--slice-0)";
    else svg.style.removeProperty("clip-path");
    svg.onanimationend = (e) => {
      e.target.style.removeProperty("animation");
    };
  }

  _startThemeObserver() {
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "attributes") {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
          if (Math.random() > 0.5) {
            this._fireMajorGlitch();
            this._getCurrentTheme();
          } else {
            this._fireMajorGlitch(true);
            this._getCurrentTheme();
            setTimeout(() => this._fireMajorGlitch(), 2000);
          }
        }
      }
    };
    const config = { attributes: true, childList: false, subtree: false };
    this.#observer = new MutationObserver(callback);
    this.#observer.observe(this.getRootNode().documentElement, config);
    this._getCurrentTheme();
  }

  _getCurrentTheme() {
    const theme =
      this.getRootNode()?.documentElement?.getAttribute("data-theme");
    // const checkIsDarkSchemePreferred = () =>
    //  window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches ?? false;
    //console.log(theme);
    this.theme = theme === "dark" ? "dark" : "light";
  }

  render() {
    return html`
      <div data-theme=${this.theme} @click=${this._typeLetters}>
        <svg
          width="846"
          height="96"
          viewBox="0 0 846 96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="global">
            <g id="D1" class="letter" data-count="1" data-x="0">
              <rect id="Rectangle 227" y="10" width="39" height="5" />
              <rect id="Rectangle 228" y="20" width="49" height="5" />
              <rect id="Rectangle 235" y="30" x="29" width="30" height="5" />
              <rect id="Rectangle 229" y="30" width="18" height="5" />
              <rect id="Rectangle 230" y="40" width="18" height="5" />
              <rect id="Rectangle 237" y="40" x="39" width="20" height="5" />
              <rect id="Rectangle 231" y="50" width="18" height="5" />
              <rect id="Rectangle 236" y="50" x="39" width="20" height="5" />
              <rect id="Rectangle 232" y="60" width="18" height="5" />
              <rect id="Rectangle 238" y="60" x="29" width="30" height="5" />
              <rect id="Rectangle 233" y="70" width="49" height="5" />
              <rect id="Rectangle 234" y="80" width="39" height="5" />
            </g>
            <g id="I1" class="letter" data-count="2" data-x="64">
              <rect id="Rectangle 239" x="64" y="10" width="20" height="5" />
              <rect id="Rectangle 240" x="64" y="20" width="20" height="5" />
              <rect id="Rectangle 241" x="64" y="30" width="20" height="5" />
              <rect id="Rectangle 244" x="64" y="40" width="20" height="5" />
              <rect id="Rectangle 242" x="64" y="50" width="20" height="5" />
              <rect id="Rectangle 245" x="64" y="60" width="20" height="5" />
              <rect id="Rectangle 243" x="64" y="70" width="20" height="5" />
              <rect id="Rectangle 246" x="64" y="80" width="20" height="5" />
            </g>
            <g id="G1" class="letter" data-count="3" data-x="90">
              <rect id="Rectangle 247" x="100" y="10" width="50" height="5" />
              <rect id="Rectangle 248" x="90" y="20" width="60" height="5" />
              <rect id="Rectangle 249" x="90" y="30" width="20" height="5" />
              <rect id="Rectangle 252" x="90" y="40" width="20" height="5" />
              <rect id="Rectangle 256" x="120" y="40" width="30" height="5" />
              <rect id="Rectangle 250" x="90" y="50" width="20" height="5" />
              <rect id="Rectangle 255" x="120" y="50" width="30" height="5" />
              <rect id="Rectangle 253" x="90" y="60" width="20" height="5" />
              <rect id="Rectangle 257" x="130" y="60" width="20" height="5" />
              <rect id="Rectangle 251" x="90" y="70" width="60" height="5" />
              <rect id="Rectangle 254" x="100" y="80" width="40" height="5" />
            </g>
            <g id="I2" class="letter" data-count="4" data-x="156">
              <rect id="Rectangle 258" x="156" y="10" width="20" height="5" />
              <rect id="Rectangle 259" x="156" y="20" width="20" height="5" />
              <rect id="Rectangle 260" x="156" y="30" width="20" height="5" />
              <rect id="Rectangle 263" x="156" y="40" width="20" height="5" />
              <rect id="Rectangle 261" x="156" y="50" width="20" height="5" />
              <rect id="Rectangle 264" x="156" y="60" width="20" height="5" />
              <rect id="Rectangle 262" x="156" y="70" width="20" height="5" />
              <rect id="Rectangle 265" x="156" y="80" width="20" height="5" />
            </g>
            <g id="T" class="letter" data-count="5" data-x="181">
              <rect id="Rectangle 266" x="181" y="10" width="60" height="5" />
              <rect id="Rectangle 267" x="181" y="20" width="60" height="5" />
              <rect id="Rectangle 268" x="201" y="30" width="20" height="5" />
              <rect id="Rectangle 271" x="201" y="40" width="20" height="5" />
              <rect id="Rectangle 269" x="201" y="50" width="20" height="5" />
              <rect id="Rectangle 272" x="201" y="60" width="20" height="5" />
              <rect id="Rectangle 270" x="201" y="70" width="20" height="5" />
              <rect id="Rectangle 273" x="201" y="80" width="20" height="5" />
            </g>
            <g id="A1" class="letter" data-count="6" data-x="247">
              <rect id="Rectangle 274" x="257" y="10" width="40" height="5" />
              <rect id="Rectangle 275" x="247" y="20" width="60" height="5" />
              <rect id="Rectangle 282" x="287" y="30" width="20" height="5" />
              <rect id="Rectangle 276" x="247" y="30" width="20" height="5" />
              <rect id="Rectangle 279" x="247" y="40" width="60" height="5" />
              <rect id="Rectangle 277" x="247" y="50" width="60" height="5" />
              <rect id="Rectangle 280" x="247" y="60" width="20" height="5" />
              <rect id="Rectangle 284" x="287" y="60" width="20" height="5" />
              <rect id="Rectangle 278" x="247" y="70" width="20" height="5" />
              <rect id="Rectangle 283" x="287" y="70" width="20" height="5" />
              <rect id="Rectangle 281" x="247" y="80" width="20" height="5" />
              <rect id="Rectangle 285" x="287" y="80" width="20" height="5" />
            </g>
            <g id="L" class="letter" data-count="7" data-x="313">
              <rect id="Rectangle 286" x="313" y="10" width="20" height="5" />
              <rect id="Rectangle 287" x="313" y="20" width="20" height="5" />
              <rect id="Rectangle 288" x="313" y="30" width="20" height="5" />
              <rect id="Rectangle 291" x="313" y="40" width="20" height="5" />
              <rect id="Rectangle 289" x="313" y="50" width="20" height="5" />
              <rect id="Rectangle 292" x="313" y="60" width="20" height="5" />
              <rect id="Rectangle 290" x="313" y="70" width="60" height="5" />
              <rect id="Rectangle 293" x="313" y="80" width="60" height="5" />
            </g>
            <g id="G2" class="letter" data-count="8" data-x="399">
              <rect id="Rectangle 306" x="409" y="10" width="50" height="5" />
              <rect id="Rectangle 307" x="399" y="20" width="60" height="5" />
              <rect id="Rectangle 308" x="399" y="30" width="20" height="5" />
              <rect id="Rectangle 312" x="399" y="40" width="20" height="5" />
              <rect id="Rectangle 313" x="429" y="40" width="30" height="5" />
              <rect id="Rectangle 309" x="399" y="50" width="20" height="5" />
              <rect id="Rectangle 310" x="429" y="50" width="30" height="5" />
              <rect id="Rectangle 314" x="399" y="60" width="20" height="5" />
              <rect id="Rectangle 315" x="439" y="60" width="20" height="5" />
              <rect id="Rectangle 311" x="399" y="70" width="60" height="5" />
              <rect id="Rectangle 316" x="409" y="80" width="50" height="5" />
            </g>
            <g id="A2" class="letter" data-count="9" data-x="464">
              <rect id="Rectangle 294" x="474" y="10" width="40" height="5" />
              <rect id="Rectangle 295" x="464" y="20" width="60" height="5" />
              <rect id="Rectangle 296" x="464" y="30" width="20" height="5" />
              <rect id="Rectangle 297" x="504" y="30" width="20" height="5" />
              <rect id="Rectangle 301" x="464" y="40" width="60" height="5" />
              <rect id="Rectangle 298" x="464" y="50" width="60" height="5" />
              <rect id="Rectangle 302" x="464" y="60" width="20" height="5" />
              <rect id="Rectangle 303" x="504" y="60" width="20" height="5" />
              <rect id="Rectangle 299" x="464" y="70" width="20" height="5" />
              <rect id="Rectangle 300" x="504" y="70" width="20" height="5" />
              <rect id="Rectangle 304" x="464" y="80" width="20" height="5" />
              <rect id="Rectangle 305" x="504" y="80" width="20" height="5" />
            </g>
            <g id="R" class="letter" data-count="10" data-x="530">
              <rect id="Rectangle 351" x="540" y="10" width="40" height="5" />
              <rect id="Rectangle 352" x="530" y="20" width="60" height="5" />
              <rect id="Rectangle 353" x="530" y="30" width="20" height="5" />
              <rect id="Rectangle 354" x="570" y="30" width="20" height="5" />
              <rect id="Rectangle 358" x="530" y="40" width="60" height="5" />
              <rect id="Rectangle 355" x="530" y="50" width="50" height="5" />
              <rect id="Rectangle 359" x="530" y="60" width="20" height="5" />
              <rect id="Rectangle 360" x="560" y="60" width="30" height="5" />
              <rect id="Rectangle 356" x="530" y="70" width="20" height="5" />
              <rect id="Rectangle 357" x="570" y="70" width="20" height="5" />
              <rect id="Rectangle 361" x="530" y="80" width="20" height="5" />
              <rect id="Rectangle 362" x="570" y="80" width="20" height="5" />
            </g>
            <g id="D2" class="letter" data-count="11" data-x="596">
              <rect id="Rectangle 317" x="596" y="10" width="49" height="5" />
              <rect id="Rectangle 318" x="596" y="20" width="59" height="5" />
              <rect id="Rectangle 319" x="596" y="30" width="18" height="5" />
              <rect id="Rectangle 320" x="625" y="30" width="30" height="5" />
              <rect id="Rectangle 324" x="596" y="40" width="18" height="5" />
              <rect id="Rectangle 325" x="635" y="40" width="20" height="5" />
              <rect id="Rectangle 321" x="596" y="50" width="18" height="5" />
              <rect id="Rectangle 322" x="635" y="50" width="20" height="5" />
              <rect id="Rectangle 326" x="596" y="60" width="18" height="5" />
              <rect id="Rectangle 327" x="625" y="60" width="30" height="5" />
              <rect id="Rectangle 323" x="596" y="70" width="59" height="5" />
              <rect id="Rectangle 328" x="596" y="80" width="49" height="5" />
            </g>
            <g id="E" class="letter" data-count="12" data-x="661">
              <rect id="Rectangle 343" x="671" y="10" width="50" height="5" />
              <rect id="Rectangle 344" x="661" y="20" width="60" height="5" />
              <rect id="Rectangle 345" x="661" y="30" width="20" height="5" />
              <rect id="Rectangle 348" x="661" y="40" width="40" height="5" />
              <rect id="Rectangle 346" x="661" y="50" width="40" height="5" />
              <rect id="Rectangle 349" x="661" y="60" width="20" height="5" />
              <rect id="Rectangle 347" x="661" y="70" width="60" height="5" />
              <rect id="Rectangle 350" x="661" y="80" width="60" height="5" />
            </g>
            <g id="N" class="letter" data-count="13" data-x="727">
              <rect id="Rectangle 329" x="737" y="10" width="40" height="5" />
              <rect id="Rectangle 330" x="727" y="20" width="60" height="5" />
              <rect id="Rectangle 331" x="727" y="30" width="20" height="5" />
              <rect id="Rectangle 332" x="767" y="30" width="20" height="5" />
              <rect id="Rectangle 336" x="727" y="40" width="20" height="5" />
              <rect id="Rectangle 342" x="767" y="40" width="20" height="5" />
              <rect id="Rectangle 333" x="727" y="50" width="20" height="5" />
              <rect id="Rectangle 341" x="767" y="50" width="20" height="5" />
              <rect id="Rectangle 337" x="727" y="60" width="20" height="5" />
              <rect id="Rectangle 338" x="767" y="60" width="20" height="5" />
              <rect id="Rectangle 334" x="727" y="70" width="20" height="5" />
              <rect id="Rectangle 335" x="767" y="70" width="20" height="5" />
              <rect id="Rectangle 339" x="727" y="80" width="20" height="5" />
              <rect id="Rectangle 340" x="767" y="80" width="20" height="5" />
            </g>
            <g id="cursor">
              <rect
                id="cursor1"
                style="--count:1"
                x="801"
                width="45"
                height="5"
              />
              <rect
                id="cursor2"
                style="--count:2"
                x="801"
                y="10"
                width="45"
                height="5"
              />
              <rect
                id="cursor3"
                style="--count:3"
                x="801"
                y="20"
                width="45"
                height="5"
              />
              <rect
                id="cursor4"
                style="--count:4"
                x="801"
                y="30"
                width="45"
                height="5"
              />
              <rect
                id="cursor5"
                style="--count:5"
                x="801"
                y="40"
                width="45"
                height="5"
              />
              <rect
                id="cursor6"
                style="--count:6"
                x="801"
                y="50"
                width="45"
                height="5"
              />
              <rect
                id="cursor7"
                style="--count:7"
                x="801"
                y="60"
                width="45"
                height="5"
              />
              <rect
                id="cursor8"
                style="--count:8"
                x="801"
                y="70"
                width="45"
                height="5"
              />
              <rect
                id="cursor9"
                style="--count:9"
                x="801"
                y="80"
                width="45"
                height="5"
              />
              <rect
                id="cursor10"
                style="--count:10"
                x="801"
                y="91"
                width="45"
                height="5"
              />
            </g>
          </g>
        </svg>
      </div>
    `;
  }
}
customElements.define("ui-digital-garden", UiDigitalGarden);

// ------------------------
