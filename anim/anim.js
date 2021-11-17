gsap.to(".header", {y: 20, ease: "bounce", duration: 2})

gsap.from("a", {opacity: 0, duration: 3, stagger: 1})

// gsap.from("#first", {x: -100, opacity: 0})
gsap.to("#first", {x: 400, duration: 5, ease: "power1", opacity: 1})

// gsap.from("#second", {x: -100, opacity: 0})
gsap.to("#second", {x: 425, duration: 3, delay: 1, ease: "power2", opacity: 1})

// gsap.from("#third", {x: -100, opacity: 0})
gsap.to("#third", {x: 450, duration: 3, delay: 2, ease: "power3", opacity: 1})

// gsap.from("#fourth", {x: -100, opacity: 0})
gsap.to("#fourth", {x: 475, duration: 3, delay: 3, ease: "power4", opacity: 1})