// ==========================
// Mouse Glow
// ==========================

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// ==========================
// 3D Glass Card Tilt
// ==========================

const cards = document.querySelectorAll(".glass-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 20;
        const rotateX = -(y / rect.height - 0.5) * 20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

});


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==========================
// Floating Animation
// ==========================

let t = 0;

function animateBlobs(){

    t += 0.01;

    document.querySelector(".blob1").style.transform =
        `translateY(${Math.sin(t)*25}px)`;

    document.querySelector(".blob2").style.transform =
        `translateY(${Math.cos(t)*25}px)`;

    document.querySelector(".blob3").style.transform =
        `translateY(${Math.sin(t*1.4)*18}px)`;

    requestAnimationFrame(animateBlobs);

}

animateBlobs();


// ==========================
// Button Ripple
// ==========================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=size+"px";
circle.style.height=size+"px";

circle.style.left=e.offsetX-size/2+"px";
circle.style.top=e.offsetY-size/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


// ==========================
// Scroll Reveal
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
entry.target.style.transition=".8s ease";

}

});

},{
threshold:.15
});

document.querySelectorAll("section,.project,.profile-card").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";

observer.observe(el);

});


// ==========================
// Navbar Blur
// ==========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>20){

nav.style.background="rgba(255,255,255,.35)";
nav.style.backdropFilter="blur(30px)";

}else{

nav.style.background="rgba(255,255,255,.15)";
nav.style.backdropFilter="blur(20px)";

}

});


// ==========================
// Hero Floating
// ==========================

const profile=document.querySelector(".profile-card");

let angle=0;

function floatCard(){

angle+=0.01;

profile.style.transform=`
translateY(${Math.sin(angle)*10}px)
`;

requestAnimationFrame(floatCard);

}

floatCard();


// ==========================
// Loading Fade
// ==========================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

},100);

});