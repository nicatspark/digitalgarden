import { html, css } from "lit";
import { BaseClass } from "./baseComponent.js";

export class UiScrollReveal extends BaseClass {
  static properties = {
    start: { type: Number },
    finish: { type: Number },
  };

  static styles = css`
    :host {
      display: block;
      contain: content;
      box-sizing: border-box;
    }

    span {
      color: hsl(0 0% 100% / 0.2);
      background-clip: text;
      background-repeat: no-repeat;
      background-size: 0% 100%;
      background-image: linear-gradient(90deg, #ccc, #ccc);
      animation: scroll-reveal linear forwards;
      animation-timeline: view(y);
      /* conver is where the leading line starts to animate */
      animation-range-start: cover var(--start, 20vh);
      /* contain is where the tail end of the text finishes */
      animation-range-end: contain var(--finish, 50vh);
    }

    @keyframes scroll-reveal {
      to {
        background-size: 100% 100%;
      }
    }
  `;

  constructor() {
    super();
    this.finish = 50;
    this.start = 20;
  }

  firstUpdated() {
    this._calculateHeightVsViewportRatio(); // this must be done on resize too
    const root = this.shadowRoot.querySelector("span");
    root.style.setProperty("--start", this.start + "vh");
    root.style.setProperty("--finish", this.finish + "vh");
  }

  /* if scrollable element is smaller that this text element the finish needs to grow to end up in correct place */
  _calculateHeightVsViewportRatio() {
    const thisHeight = this.getBoundingClientRect().height;
    const a = this._getScrollParent(this, false);
    const viewportHeight =
      a.localName === "body" ? window.innerHeight : a.clientHeight;
    const viewportIsBigger = viewportHeight > thisHeight;
    if (viewportIsBigger) return;
    const diffRatio = ((thisHeight - viewportHeight) / viewportHeight).toFixed(
      2,
    );
    console.log("Ratio that needs to skew --finish by:", diffRatio);
    // use ratio as a constant and increase --finish property linearly here.
    this.finish = this.finish * (1 + diffRatio * 2);
  }

  _getScrollParent(element, includeHidden) {
    var style = getComputedStyle(element);
    var excludeStaticParent = style.position === "absolute";
    var overflowRegex = includeHidden
      ? /(auto|scroll|hidden)/
      : /(auto|scroll)/;

    if (style.position === "fixed") return document.body;
    for (var parent = element; (parent = parent.parentElement); ) {
      style = getComputedStyle(parent);
      if (excludeStaticParent && style.position === "static") {
        continue;
      }
      if (
        overflowRegex.test(style.overflow + style.overflowY + style.overflowX)
      )
        return parent;
    }

    return document.body;
  }

  render() {
    return html` <span><slot></slot></span> `;
  }
}
customElements.define("ui-scroll-reveal", UiScrollReveal);
