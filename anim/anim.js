gsap.to(".header", {y: 20, ease: "bounce", duration: 2})

gsap.from("h2", {opacity: 0, duration: 3, stagger: 1})

gsap.to(".first", {x: 150, duration: 5, delay: 3, ease: "power1", opacity: 1})

gsap.to(".second", {x: 225, duration: 3, delay: 4, ease: "power2", opacity: 1})

gsap.to(".third", {x: 300, duration: 3, delay: 5, ease: "power3", opacity: 1})

gsap.to(".fourth", {x: 375, duration: 3, delay: 6, ease: "power4", opacity: 1})

gsap.from(".question", {x: 1000, y: 200, delay: 7})
gsap.to(".question", {x: 670, y: 200, duration: 3, ease: "power1", opacity: 1, delay: 7})

gsap.from(".yes-btn", {x: 640, y: 1000, opacity: 0, delay: 8})
gsap.to(".yes-btn", {x: 640, y: 250, duration: 3, ease: "power1", opacity: 1, delay: 8})

gsap.from(".no-btn", {x: 740, y: 1000, opacity: 0, delay: 8})
gsap.to(".no-btn", {x: 740, y: 250, duration: 3, ease: "power1", opacity: 1, delay: 8})

let no_btn = document.querySelector(".no-btn")
no_btn.addEventListener("mouseover", () => {
    no_btn.textContent = "YES";
})
no_btn.addEventListener("mouseout", () => {
    no_btn.textContent = "NO";
})