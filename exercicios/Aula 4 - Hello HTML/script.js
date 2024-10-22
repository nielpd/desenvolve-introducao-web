document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.About',
      start: 'top 85%',
      end: 'bottom 25%',
      toggleActions: 'play none none reverse',
    }
  });

  tl.from('.About', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power1.out',
  });
});
