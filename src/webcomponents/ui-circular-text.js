import { html, css } from "lit";
import { BaseClass } from "./baseComponent.js";

const delay = async (ms) => new Promise((res) => setTimeout(res, ms));

export class UiCirkularText extends BaseClass {
  #positionTop;
  #positionBottom;
  #x;
  #y;
  #defaultRadius;
  #radius;
  #centerOffset;
  #circleContainer;

  static properties = {
    myBoolean: { type: Boolean, attribute: "my-boolean" },
    labelTop: { type: String, attribute: "label-top" },
    labelBottom: { type: String, attribute: "label-bottom" },
    letterSpacing: { type: String, attribute: "letter-spacing" },
    radius: { type: Number },
    radiusOffset: { type: Number, attribute: "radius-offset" },
    scaleEffect: { type: Boolean, attribute: "scale-effect" },
    fontSize: { type: Number, attribute: "font-size" },
    separator: { type: String },
  };

  static styles = css`
    :host {
      display: block;
      contain: layout;
      box-sizing: border-box;
      width: fit-content;
      position: relative;
    }

    #circleContainer {
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      height: 1px;
      rotate: var(--rotate, 0deg);
      opacity: var(--opacity, 1);
    }
  `;

  constructor() {
    super();
    this.scaleEffect = false;
    this.labelTop = "";
    this.labelBottom = "";
    this.letterSpacing = 5; // degree of circle
    this.radius = null; // px
    this.radiusOffset = 0; // % in decimal of auto(=min w/h of anchor) 1 = no change
    this.fontSize = 1.2;
  }

  async firstUpdated() {
    const $anchor = this.slottedChildren[0];
    //$anchor.style.zIndex = -1;
    //$anchor.style.position = "relative";
    await this.doAnchorTransitionIn($anchor);
    const anchorStyles = window.getComputedStyle(this);
    const anchorWidth = parseInt(anchorStyles.width);
    const anchorHeight = parseInt(anchorStyles.height);
    this.#circleContainer = this.shadowRoot?.getElementById("circleContainer");
    this.#circleContainer.style.left = parseInt(anchorStyles.width) / 2 + "px";
    this.#circleContainer.style.top = parseInt(anchorStyles.height) / 2 + "px";
    this.#x = 0; //parseInt(anchorStyles.x) + parseInt(anchorStyles.width) / 2;
    this.#y = 0; //parseInt(anchorStyles.y) + parseInt(anchorStyles.height) / 2;
    this.centerOffset = { x: this.#x, y: this.#y };
    const radiusFromAnchor = Math.min(anchorWidth / 2, anchorHeight / 2);
    this.#radius = Math.max(
      this.radius ?? radiusFromAnchor * this.radiusOffset,
      50,
    );
    const [posTop, posBottom] = this.createDataFromSettings();
    this.layoutText(posTop);
    this.layoutText(posBottom);
    if (this.separator) this.createSeparators(posTop, posBottom);
  }

  async doAnchorTransitionIn($anchor) {
    return new Promise(async (resolve) => {
      $anchor.style.transition = "all 0.8s";
      $anchor.style.filter =
        "brightness(800%) contrast(400%) saturate(40%) blur(10px)";
      await delay(0);
      $anchor.style.removeProperty("filter");
      resolve("");
    });
  }

  createSeparators(posTop, posBottom) {
    const fonSizeAdjust = 1.2;
    const a = posTop[0].angle;
    const b = posBottom.at(-1).angle;
    const c = posBottom[0].angle;
    const d = posTop.at(-1).angle;

    const gap = a + (360 * Math.PI) / 180 - b;
    const angle1 = b + gap / 2;
    const angle2 = d + gap / 2;
    const letterOffset = (this.fontSize * fonSizeAdjust * 16) / 2;
    const x =
      this.centerOffset.x + this.#radius * Math.cos(angle1) - letterOffset;
    const y =
      this.centerOffset.y + this.#radius * Math.sin(angle1) - letterOffset;
    const x2 =
      this.centerOffset.x + this.#radius * Math.cos(angle2) - letterOffset;
    const y2 =
      this.centerOffset.y + this.#radius * Math.sin(angle2) - letterOffset;

    [
      [x, y, angle1],
      [x2, y2, angle2],
    ].forEach((pos) => {
      let div = document.createElement("div");
      div.textContent = this.separator;
      div.style.width = "fit-content";

      div.style.fontSize = `calc(${this.fontSize}rem * ${fonSizeAdjust})`;
      div.style.position = "absolute";
      div.style.left = pos[0] + "px";
      div.style.top = pos[1] + "px";
      div.style.rotate = `${pos[2] * (180 / Math.PI) + 90}deg`;
      if (this.scaleEffect)
        div = this.scaleEffectFn(div).then((div) => {
          this.#circleContainer?.appendChild(div);
        });
      else this.#circleContainer?.appendChild(div);
    });
  }

  createDataFromSettings() {
    const options = {
      radius: this.#radius,
      centerOffset: { x: this.#x, y: this.#y },
      letterSpacing: this.letterSpacing,
    };

    const posTop = this.getCircularTextPositions({
      ...options,
      string: this.labelTop || "Building and cultivating internet",
      rotation: -90, // Adjust overall text angle
      invert: false, // Flip letters if needed
    });

    const posBottom = this.getCircularTextPositions({
      ...options,
      string: this.labelBottom || "pixel by pixel, bit by bit",
      rotation: 180 - 90, // Adjust overall text angle
      invert: true, // Flip letters if needed
    });

    return [posTop, posBottom];
  }

  layoutText(positions) {
    positions.forEach((letter) => {
      let div = document.createElement("div");
      div.textContent = letter.char.toUpperCase();
      div.style.width = "fit-content";
      div.style.position = "absolute";
      div.style.left = letter.x + "px";
      div.style.top = letter.y + "px";
      div.style.rotate = letter.letterRotation + "deg";
      div.style.fontFamily = "monospace";
      div.style.fontSize = `${this.fontSize}rem`;
      div.style.textShadow = "0 0 8px white";
      if (this.scaleEffect)
        div = this.scaleEffectFn(div).then((div) => {
          this.#circleContainer?.appendChild(div);
        });
      else this.#circleContainer?.appendChild(div);
    });
  }

  render() {
    return html`
      <slot></slot>
      <div id="circleContainer"></div>
    `;
  }

  async scaleEffectFn(div) {
    return new Promise(async (resolve) => {
      div.style.scale = "var(--scale, 0.1 1)";
      this.#circleContainer.style.setProperty("--rotate", "-180deg");
      this.#circleContainer.style.setProperty("--opacity", "0");
      await delay(0);
      div.style.transition = "scale 1s ease-out 0s";
      this.#circleContainer.style.transition = "rotate 2s ease-out, opacity 1s";
      await delay(1000);
      this.#circleContainer.style.setProperty("--rotate", "0deg");
      this.#circleContainer.style.setProperty("--opacity", "1");
      setTimeout(() => {
        this.style.setProperty("--scale", "1");
      }, 2000);
      resolve(div);
    });
  }

  getCircularTextPositions({
    string,
    radius,
    centerOffset = { x: 0, y: 0 },
    letterSpacing = 1,
    rotation = 0,
    invert = false,
  }) {
    if (string.length === 0) return [];
    const totalAngle = string.length * letterSpacing; // Total angle occupied by text
    const startAngle = rotation - totalAngle / 2; // Center the text
    const angleStep = (totalAngle / string.length) * (Math.PI / 180); // Angle per letter in radians

    // Reverse text direction if invert is set (so bottom text reads left to right)
    const chars = invert ? string.split("").reverse() : string.split("");

    return chars.map((char, index) => {
      const angle = startAngle * (Math.PI / 180) + index * angleStep; // Compute angle per letter
      const letterOffset = (this.fontSize * 16) / 2;
      const x = centerOffset.x + radius * Math.cos(angle) - letterOffset;
      const y = centerOffset.y + radius * Math.sin(angle) - letterOffset;
      let letterRotation = angle * (180 / Math.PI) + 90; // Convert to degrees

      if (invert) {
        letterRotation += 180; // Flip all letters if invert is true
      }

      return { char, x, y, letterRotation, angle };
    });
  }
}
customElements.define("ui-cirkular-text", UiCirkularText);
