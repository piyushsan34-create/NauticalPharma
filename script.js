/* ==========================================
   NAUTICAL PHARMA
   script.js
========================================== */

// ==========================
// HERO IMAGE SLIDER
// ==========================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

if(slides.length > 0){

    showSlide(0);

    setInterval(nextSlide,4000);

}


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ==========================
// REQUEST QUOTE BUTTON
// ==========================

const quoteButtons=document.querySelectorAll(".inquiry-btn");

quoteButtons.forEach(button=>{

    button.addEventListener("click",function(){

        const card=this.closest(".product-card");

        const product=card.querySelector("h3").innerText;

        const contact=document.querySelector("#contact");

        contact.scrollIntoView({

            behavior:"smooth"

        });

        const textarea=document.querySelector("textarea");

        textarea.value=
`Product Interested:
${product}

Please provide quotation, availability and shipping details.`;

    });

});


// ==========================
// CONTACT FORM
// ==========================

const form=document.getElementById("quoteForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const company=this.querySelectorAll("input")[0].value;

const person=this.querySelectorAll("input")[1].value;

const email=this.querySelectorAll("input")[2].value;

const country=this.querySelectorAll("input")[3].value;

const message=this.querySelector("textarea").value;

const subject="Product Inquiry";

const body=
`Company: ${company}

Contact Person: ${person}

Email: ${email}

Country: ${country}

Requirement:

${message}`;

window.location.href=
`mailto:info@nauticalpharma.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

});

}


// ==========================
// HEADER SHADOW ON SCROLL
// ==========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>40){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.15)";

}else{

header.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";

}

});


// ==========================
// ACTIVE NAVIGATION
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================
// YEAR
// ==========================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}

console.log("Nautical Pharma Website Loaded Successfully");
/* ===========================
   FAQ ACCORDION
=========================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(faq=>{

if(faq!==item){

faq.classList.remove("active");

}

});

item.classList.toggle("active");

});

});
