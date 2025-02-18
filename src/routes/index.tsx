import { createFileRoute } from "@tanstack/react-router";
import styles from "./index.module.css";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

const abortController = new AbortController();
const signal = abortController.signal;

function App() {
  const logoBig = useRef<HTMLElement>(null);
  const logoSmall = useRef<HTMLElement>(null);
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

  return (
    <>
      <header className={styles.header}>
        {scrolled && (
          <ui-digital-garden
            no-glow
            no-glitch
            no-delay
            typed-in
            ref={logoSmall}
          ></ui-digital-garden>
        )}
      </header>
      <section className={styles.landing}>
        <div className={styles.container} style={{ opacity: scrolled ? 0 : 1 }}>
          <ui-digital-garden
            offset="20"
            ref={logoBig}
            delay="2000"
          ></ui-digital-garden>
          <p className={"silkscreen-regular " + styles.tagline}>
            {showTagline && "Could be _your_ frontend aficionado"}
          </p>
        </div>
      </section>
      <section className={styles.about}>
        <h2>About</h2>
        <p>
          <ui-scroll-reveal finish="20">
            I'm a web developer with a passion for frontend. I am a freelancing
            consultant and Digital Garden is my company. I've been in the
            industry for 25+ years and worked with a variety of clients, from
            small startups to large corporations. I specialize in building web
            applications using modern frontend frameworks. I also have
            experience with backend technologies like Node.js, Express, and
            MongoDB/SQL. I'm always looking for new challenges and opportunities
            to learn and grow as a developer. If you're looking for a frontend
            developer to help you build your next project, I'd love to hear from
            you! Contact me at nicolas@hervy.se
          </ui-scroll-reveal>
        </p>
      </section>
    </>
  );
}
