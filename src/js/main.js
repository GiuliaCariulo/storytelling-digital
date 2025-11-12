import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// HERO PARALLAX_______________________________________________________

gsap.fromTo(
  ".hero-mountain-2",
  { x: 0 },
  {
    x: 100,
    duration: 1,
    scrollTrigger: {
      trigger: ".hero",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
      markers: true,
    },
  }
);
