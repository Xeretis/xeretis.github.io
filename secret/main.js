particlesJS.load(
  "particles-js",
  "../assets/particles/particles.json",
  function () {
    console.log("callback - particles.js config loaded");
  }
);

var typed = new Typed(".typewriter", {
  strings: [
    "A krumplibogarak megmentése a cél!",
    "A karalibizációval történelmet írunk.",
    "A génkezelt pici karalábékkal egy lépéssel közelebb a jövő!",
  ],
  loop: true,
  backDelay: 5000,
  backSpeed: 25,
  typeSpeed: 25,
});

AOS.init();
