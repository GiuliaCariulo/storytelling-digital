import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

// HERO PARALLAX_______________________________________________________

gsap.to(".hero-mountain-1", {
  y: 0,
  x: -300,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});
