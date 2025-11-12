import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// HERO PARALLAX_______________________________________________________

let hero = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=100%",
    scrub: 1,
    pin: true,
  },
});

hero.fromTo(".hero-mountain-2", { x: 0, y: 0 }, { x: 800, y: 47 }, 0);
hero.fromTo(".hero-mountain-3", { x: 0, y: 0 }, { x: -800, y: 47 }, 0);
hero.fromTo(".hero-title", { scale: 1, y: 0 }, { scale: 0.7, y: -100 }, 0);
