const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");


const tl = new TimelineMax();
tl.fromTo(hero,1, {height: "0%"}, {height: "100%", ease: Power4.easeInOut })
.fromTo(hero, 1, {width: "100%"}, {width: "80%", ease: Power2.easeInOut }, "-=1")
.fromTo(slider, 1, {x:"-100%"}, {x: "0%", ease: Power4.easeInOut })
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "=-0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "=-1")
;