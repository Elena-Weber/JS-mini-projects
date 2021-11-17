gsap.to(".header", {y: 20, ease: "bounce", duration: 2})

gsap.from("a", {opacity: 0, duration: 3, stagger: 1})

gsap.to(".first", {x: 400, duration: 5, ease: "power1", opacity: 1})

gsap.to(".second", {x: 425, duration: 3, delay: 1, ease: "power2", opacity: 1})

gsap.to(".third", {x: 450, duration: 3, delay: 2, ease: "power3", opacity: 1})

gsap.to(".fourth", {x: 475, duration: 3, delay: 3, ease: "power4", opacity: 1})

gsap.from(".question", {opacity: 0, delay: 4})
gsap.to(".question", {y: 200, duration: 3, ease: "power1", opacity: 1, delay: 4})

gsap.from(".btn", {opacity: 0, delay: 4.5})
gsap.to(".btn", {x: 70, y: 200, duration: 3, ease: "power1", opacity: 1, delay: 4.5})