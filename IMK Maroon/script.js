function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

    reveals.forEach((element)=>{

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

/* ACTIVE NAVBAR */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach((section)=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link)=>{

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active-link");
        }

    });

});

/* DARK LIGHT MODE */

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML = "☀️";
        localStorage.setItem("theme","light");
    }else{
        themeBtn.innerHTML = "🌙";
        localStorage.setItem("theme","dark");
    }

});

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeBtn.innerHTML = "☀️";
}

/* INTRO SCREEN */

window.addEventListener("load", () => {

    document.body.style.overflow = "hidden";

});

/* ENTER PORTFOLIO */

const enterBtn = document.getElementById("enter-btn");

if(enterBtn){

    enterBtn.addEventListener("click", () => {

        const intro = document.getElementById("intro");

        intro.style.transition = "0.8s";
        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            document.body.style.overflow = "auto";

            document.getElementById("home").scrollIntoView({
                behavior:"smooth"
            });

        }, 800);

    });

}

const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

const profile = document.querySelector(".profile");

if(profile){

profile.addEventListener("mousemove",(e)=>{

const rect = profile.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateY = (x - centerX) / 20;
const rotateX = -(y - centerY) / 20;

profile.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)`;

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform =
"perspective(1000px) rotateX(0) rotateY(0) scale(1)";

});

}

