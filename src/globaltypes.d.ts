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
    "ui-circular-text": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "ui-digital-farmer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    "ui-text-reveal": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ui-digital-garden": HTMLElement;
    "ui-scroll-reveal": HTMLElement;
    "ui-circular-text": HTMLElement;
    "ui-digital-farmer": HTMLElement;
    "ui-text-reveal": HTMLElement;
  }
}
