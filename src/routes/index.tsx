import { createFileRoute } from "@tanstack/react-router";
import styles from "./index.module.css";
import { use, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

const abortController = new AbortController();
const signal = abortController.signal;

function App() {
  const logo = useRef<HTMLElement>(null);
  const [showTagline, setShowTagline] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    logo.current?.addEventListener("major-glitch", () => {
      setTimeout(() => setShowTagline(true), 1000);
      console.log("Major glitch detected!");
    });

    console.log("Adding scroll event listener");
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 100) {
          document.startViewTransition(() => {
            setScrolled(true);
          });
        } else {
          document.startViewTransition(() => {
            setScrolled(false);
            setShowTagline(false);
          });
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
            no-typing
          ></ui-digital-garden>
        )}
      </header>
      <section className={styles.landing}>
        {!scrolled && (
          <div className={styles.container}>
            <ui-digital-garden offset="20" ref={logo}></ui-digital-garden>
            <p className={"silkscreen-regular " + styles.tagline}>
              {showTagline && "I could be _your_ frontend aficionado"}
            </p>
          </div>
        )}
      </section>
      <section className={styles.about}>
        <h2>About</h2>
        <p>
          I'm a frontend developer with a passion for web technologies. I
          freelance and Digital Garden is my company. I've been in the industry
          for 25+ years and I've worked with a variety of clients, from small
          startups to large corporations. I specialize in building web
          applications using modern frontend frameworks. I also have experience
          with backend technologies like Node.js, Express, and MongoDB. I'm
          always looking for new challenges and opportunities to learn and grow
          as a developer. If you're looking for a frontend developer to help you
          build your next project, I'd love to hear from you! Contact me at
          nicolas@hervy.se
        </p>
      </section>
    </>
  );
}
