// type web component for JSX

declare namespace JSX {
  interface IntrinsicElements {
    "ui-digital-garden": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "ui-scroll-reveal": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-digital-garden": HTMLElement;
    "ui-scroll-reveal": HTMLElement;
  }
}
