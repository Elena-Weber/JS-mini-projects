gsap.to(".header", {y: 20, ease: "bounce", duration: 2})

gsap.from("a", {opacity: 0, duration: 3, stagger: 1})

gsap.to(".first", {x: 100, duration: 5, ease: "power1", opacity: 1})

gsap.to(".second", {x: 150, duration: 3, delay: 1, ease: "power2", opacity: 1})

gsap.to(".third", {x: 200, duration: 3, delay: 2, ease: "power3", opacity: 1})

gsap.to(".fourth", {x: 250, duration: 3, delay: 3, ease: "power4", opacity: 1})

gsap.from(".question", {x: 1000, y: 200, opacity: 0, delay: 4})
gsap.to(".question", {x: 600, y: 200, duration: 3, ease: "power1", opacity: 1, delay: 4})

gsap.from(".btn", {x: 660, y: 1000, opacity: 0, delay: 5})
gsap.to(".btn", {x: 660, y: 220, duration: 3, ease: "power1", opacity: 1, delay: 4.5})