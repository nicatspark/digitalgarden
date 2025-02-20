let started = false;
let abort = false;

interface TypewriterEffectProps {
  strings: string[];
  delays: number[];
  element: HTMLDivElement;
}

const easeOutQuad = (x: number) => 1 - (1 - x) * (1 - x);

export function typewriterEffectAbort() {
  abort = true;
}

export function typewriterEffect({
  strings,
  delays,
  element,
}: TypewriterEffectProps) {
  if (started && strings) return;
  started = true;
  abort = false;
  let currentIndex = 0;
  let currentString = "";
  let nextString = strings[currentIndex];
  let nextNextString = strings[(currentIndex + 1) % strings.length];
  let isDeleting = false;
  let sentenceDone = false;
  let charIndex = 0;

  function type() {
    if (abort) {
      started = false;
      abort = false;
      return;
    }
    if (isDeleting) {
      if (
        charIndex > 0 &&
        !nextNextString.startsWith(nextString.substring(0, charIndex - 1))
      ) {
        // delete a character
        currentString = nextString.substring(0, charIndex - 1);
        charIndex--;
      } else {
        // move to the next string
        isDeleting = false;
        currentIndex = (currentIndex + 1) % strings.length;
        nextString = strings[currentIndex];
        nextNextString = strings[(currentIndex + 1) % strings.length]; // update nextNextString
      }
    } else {
      // add a character
      if (charIndex < nextString.length) {
        currentString = nextString.substring(0, charIndex + 1);
        charIndex++;
      } else {
        // start deleting
        isDeleting = true;
        sentenceDone = true;
      }
    }

    element.textContent = currentString + "❚";

    // console.log(
    //   charIndex,
    //   (charIndex / nextString.length).toFixed(1),
    //   easeOutExpo(charIndex / nextString.length),
    // );
    const expo = easeOutQuad(charIndex / nextString.length);
    const delay = isDeleting
      ? sentenceDone
        ? delays[currentIndex]
        : expo * 50
      : expo * 100;
    sentenceDone = false;
    setTimeout(type, delay);
  }

  type();
}

// const strings = [
//   "Consultant Web Developer",
//   "Freelance Frontend Engineer",
//   "Freelance Frontend Developer",
//   "Freelance Frontend Architect",
//   "Could be _your_ frontend aficionado",
// ];
// const delays = [4000, 2000, 2000, 2000, 5000];
// const element = document.getElementById("typewriter") as HTMLDivElement;

// typewriterEffect(strings, delays, element);
