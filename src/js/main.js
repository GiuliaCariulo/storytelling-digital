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

hero.fromTo(".hero-mountain-1", { y: 0 }, { y: -500 }, 0);
hero.fromTo(".hero-mountain-2", { x: 0, y: 0 }, { x: 800, y: 47 }, 0);
hero.fromTo(".hero-mountain-3", { x: 0, y: 0 }, { x: -800, y: 47 }, 0);
hero.fromTo(".hero-title", { scale: 1, y: 0 }, { scale: 0.7, y: -100 }, 0);
hero.fromTo(".hero-title", { y: -100 }, { scale: 0.7, y: -500 });

// Sabre's walking on comic box_______________________________________________________

const comicHorizontalScroll = document.querySelector(
  ".comic-scroll-horizontal"
);
const scrollWidth = comicHorizontalScroll.scrollWidth - window.innerWidth;

gsap.to(comicHorizontalScroll, {
  x: -scrollWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".comic-scroll-container",
    start: "top top",
    end: "+=200%",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    markers: true,
  },
});
