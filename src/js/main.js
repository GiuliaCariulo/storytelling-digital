import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// HERO PARALLAX_______________________________________________________

let hero = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: 1,
    pin: true,
  },
});

sabre = document.querySelector(".sabre");
heroSabre = document.querySelector(".hero-sabre");

function sabreExchange() {
  console.log("sabre exchange");
  sabre.style.opacity = 1;
  heroSabre.style.opacity = 0;
}

hero.fromTo(".hero-mountain-1", { scale: 1.5 }, { scale: 1 }, 0);
hero.fromTo(".hero-mountain-2", { x: 0 }, { x: 800 }, 0);
hero.fromTo(
  ".hero-mountain-3",
  { x: 0 },
  { x: -800, onComplete: sabreExchange },
  0
);
hero.fromTo(".hero-title", { scale: 1, y: 0 }, { scale: 0.4, y: -100 }, 0);
hero.fromTo(".hero-title", { y: -100 }, { y: -400 });

// Sabre's walking on comic box_______________________________________________________

const comicHorizontalScroll = document.querySelector(
  ".comic-scroll-horizontal"
);
const scrollWidth = comicHorizontalScroll.scrollWidth - window.innerWidth + 100;

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".comic-scroll-container",
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  })
  .to(comicHorizontalScroll, {
    x: -scrollWidth,
    ease: "none",
  })
  .to("#paw-rock", {
    rotation: 20,
  });
