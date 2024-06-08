import { gsap } from "gsap";

const pageswitchanimations = () => {
  const circle = document.getElementById("circle");
  if (circle) {
    const tl = gsap.timeline();

    tl.fromTo(
      circle,
      { scale: 100 },
      {
        scale: 0,
        duration: 1, // Add duration to see the animation
      }
    );
  }
};

export default pageswitchanimations;
