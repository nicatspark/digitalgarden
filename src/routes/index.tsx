import { createFileRoute } from "@tanstack/react-router";
import styles from "./index.module.css";
import { useEffect, useRef, useState } from "react";
import {
  typewriterEffect,
  typewriterEffectAbort,
} from "../helpers/displayString";
import { BigHeadlines } from "../components/BigHeadlines";

export const Route = createFileRoute("/")({
  component: App,
});

const strings = [
  "Consultant Web Developer",
  "Freelance Frontend Engineer",
  "Freelance Frontend Developer",
  "Freelance Frontend Architect",
  "Could be _your_ frontend aficionado",
];
const delays = [4000, 800, 800, 800, 5000];
const element = document.getElementById("typewriter") as HTMLDivElement;

const abortController = new AbortController();
const signal = abortController.signal;

function App() {
  const logoBig = useRef<HTMLElement>(null);
  const logoSmall = useRef<HTMLElement>(null);
  const tagline = useRef<HTMLParagraphElement>(null);
  const [showTagline, setShowTagline] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    logoBig.current?.addEventListener("major-glitch", () => {
      setTimeout(() => setShowTagline(true), 1000);
      console.log("Major glitch detected!");
    });

    window.addEventListener(
      "scroll",
      () => {
        if (
          window.scrollY > 100 &&
          logoBig.current?.typestate === "typed-out" &&
          !scrolled
        ) {
          logoBig.current?.addEventListener(
            "typed-back",
            () => {
              setScrolled(true);
              // console.log("Typed back");
            },
            { once: true },
          );
          logoBig.current?.dispatchEvent(new CustomEvent("typeback"));
        } else if (
          window.scrollY < 100 &&
          logoBig.current?.typestate === "typed-in"
        ) {
          logoBig.current?.dispatchEvent(new CustomEvent("typeforward"));
          setScrolled(false);
          setShowTagline(false);
        }
      },
      { signal },
    );

    return () => {
      //abortController.abort();
    };
  }, []);

  useEffect(() => {
    if (showTagline && tagline.current) {
      typewriterEffect({ strings, delays, element: tagline.current });
    } else if (tagline.current) {
      tagline.current.textContent = "";
      typewriterEffectAbort();
    }

    // return () => {
    //   typewriterEffectAbort();
    // };
  }, [showTagline]);

  return (
    <>
      <header
        className={styles.header}
        style={{ transform: scrolled ? "translateY(0)" : "translateY(-100%)" }}
      ></header>
      {scrolled && (
        <ui-digital-garden
          no-glow
          no-glitch
          no-delay
          typed-in
          ref={logoSmall}
          className={styles.headerLogo}
        ></ui-digital-garden>
      )}
      <section className={styles.landing}>
        <div className={styles.container} style={{ opacity: scrolled ? 0 : 1 }}>
          <ui-digital-garden
            offset="20"
            ref={logoBig}
            delay="2000"
          ></ui-digital-garden>
          <p className={"silkscreen-regular " + styles.tagline} ref={tagline}>
            {showTagline && "Could be _your_ frontend aficionado"}
          </p>
        </div>
      </section>
      <section>
        <h2>You're in good company</h2>
        <p>
          <ui-scroll-reveal finish="20">
            I've been working with clients like <em>Scania</em>,{" "}
            <em>Stena Line</em>, <em>Stena Renewable</em>, <em>Medivir</em>,{" "}
            <em>Svt</em>, <em>Göteborgs-Posten</em>, <em>Volvo</em>,{" "}
            <em>Akzo-Nobel</em>, <em>Telia</em> and many smaller businesses and
            lovely startups. Currently I am working with <em>SKF</em> in their
            design-system-team that supports their brigade of application
            developers globally.
          </ui-scroll-reveal>
        </p>
      </section>
      <BigHeadlines />
      <section className={styles.about}>
        <h2>About</h2>
        <p>
          <ui-scroll-reveal finish="20">
            Code can be like poetry. At least when judged by peers. But there is
            also a practical side to it. An outcome and purpose. And to strike
            that balance is what I strive for. Leaving out the obvious,
            maintainability, scalability and performance on purpose because
            beautiful code encompasses all of that. And that's what I strive
            for. Beautiful code with a business goal.
            <br />
            <br />
            As I am sure you caught by now, I'm a web developer with a passion
            for frontend development. I am a freelancing consultant and Digital
            Garden is my company. I've been in the industry for twenty-five plus
            years and had the privilege of working with a variety of interesting
            clients, from small startups to large corporations. I specialize in
            building web applications using modern frontend frameworks. I also
            have experience with backend technologies like Node.js, Express, and
            MongoDB/SQL. I'm always looking for new challenges and opportunities
            to learn and grow as a developer, believe it or not. If you're
            looking for a frontend developer to help you build your next
            project, I'd love to hear from you! Contact me at{" "}
            <a href="mailto:nicolas@hervy.se">nicolas@hervy.se</a>
          </ui-scroll-reveal>
        </p>
      </section>
      <section>
        <h2>Skills & Expertise</h2>
        <ul>
          <li>React/Next/Typescript</li>
          <li>Native Web Component libraries</li>
          <li>Responsive Design</li>
          <li>Web Development</li>
          <li>Mobile Development/</li>
          <li>UI/UX Design/prototyping</li>
          <li>SEO Optimization</li>
          <li>Accessibility Best Practices</li>
          <li>Performance Optimization/architecture</li>
        </ul>
      </section>
      <section>
        <h2>Let's meet</h2>
        <div
          className="tidycal-embed"
          data-path="nicolas-hervy/30-minute-meeting"
        ></div>
        <script
          src="https://asset-tidycal.b-cdn.net/js/embed.js"
          async
        ></script>
      </section>
      <section className={styles.farmer}>
        <ui-cirkular-text
          label-top="Building and cultivating internet"
          labelBottom="pixel by pixel, bit by bit"
          scale-effect
          letter-spacing="5"
          radius-offset="2"
          separator="☆"
        >
          <ui-digital-farmer></ui-digital-farmer>
        </ui-cirkular-text>
      </section>
      <div className={styles.spacer}></div>
      <footer>
        <ui-text-reveal>
          <p>
            <a href="mailto:nicolas@hervy.se">Contact me</a>
          </p>
        </ui-text-reveal>
      </footer>
    </>
  );
}
