
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".navigators");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

var faqBar = document.querySelectorAll(".faq-menu li");
var faqBar = document.querySelectorAll(".faq-menu li");

faqBar.forEach((li) => {
  li.addEventListener("click", () => {

    if (li.classList.contains("active")) {
      li.classList.remove("active");
    } else {
      faqBar.forEach((ele) => {
        ele.classList.remove("active");
      });
      li.classList.add("active");
    }
  });
  
});

var showBox = document.querySelectorAll(".showcase-box img");
var showOverImg = document.querySelector(".showcase-over-box img");
var showOver = document.querySelector(".showcase-over");

document.querySelector(".fa-xmark").onclick = () => {
    showOver.style.display = "none";
}
showOver.onclick = ()=>{
  showOver.style.display = "none";
}

showBox.forEach((ele)=>{
  ele.addEventListener("click" , ()=>{
      showOver.style.display = "inherit";
      gsap.from(showOverImg, {
          opacity : 0,
          scale : 0.8,
      })
    showOverImg.src = ele.getAttribute("src");
  })
})

if (window.matchMedia("(min-width: 768px)").matches) 
{
  
  Shery.mouseFollower();
  
  Shery.imageMasker(".showcase-box" , {
    mouseFollower: true,
    text: "Click Here",
  });
  Shery.imageMasker(".insurance-img" , {
    mouseFollower: true,
    text: "Get Now",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  }
Shery.makeMagnet(".ride-img , .footer-links ul li a , .Atharva , .navigators li" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

var heroTl = gsap.timeline();

heroTl.from(".loader-h1 span", {
  y: 100,
  rotation: 10,
  duration: 2,
  stagger: 0.1,
  ease: "power3.inOut"
});

heroTl.to("#loader", {
  top : "-100%",
  opacity: 0,
  duration : 1,
  ease: "power3.inOut"
})
heroTl.to("#loader", {
  display : "none"
})
heroTl.from(".navigators li", {
  opacity: 0,
  stagger: .4,
  y : 20,
  rotation: 10,
}, 'stagNav')

heroTl.from(".hero h1", {
  scale: 1.5,
  y : 300,
  opacity : 0,
}, 'stagNav')

heroTl.from(".hero p", {
  scale: 1.5,
  y: 300,
  stagger : 0.5,
  opacity : 0,
})

var heading = document.querySelectorAll(".heading");

heading.forEach((ele)=>{
  gsap.from(ele, {
    scale: 1.5,
    y : 300,
    opacity: 0,
    stagger : .3,
    scrollTrigger : ele
  })
})
gsap.from(".insurance-img", {
  x: 100,
  opacity: 0,
  scale : 0.5,
  scrollTrigger: {
    trigger: ".insurance-img",
    scrub : 2,
    start: "0% 70%",
    end: "0% center",
  }
  
})
gsap.from(".faq-menu li", {
  x: -200,
  opacity: 0,
  stagger : 0.5,
  scrollTrigger : ".faq-menu li"
})
gsap.from(".ride-text span", {
   y : 100,
  opacity: 0,
  stagger : 0.3,
  scrollTrigger : ".ride-text"
})
gsap.from(".ride-img", {
  opacity: 0,
  scale: .5,
  scrollTrigger: {
    trigger: ".ride",
    scrub : 2,
    start: "0% 70%",
    end: "50% center",
  }
})
gsap.from(".showcase-box", {
  opacity: 0,
  scale: .5,
  stagger : -.4,
  scrollTrigger: {
    trigger: ".showcase-box",
    scrub : 3,
    start: "0% 80%",
    end: "50% center",
  }
})

gsap.from("form", {
  x: 200,
  opacity: 0,
  rotation : 10,
  duration : 1,
  stagger : 0.5,
  scrollTrigger : ".contact"
})
gsap.from(".contact", {
  x: -200,
  opacity: 0,
  rotation : -10,
  duration : 1,
  stagger : 0.5,
  scrollTrigger : ".contact"
})
gsap.from(".footer", {
  x: 200,
  opacity: 0,
  rotation : -10,
  duration : 1,
  stagger : 0.5,
  scrollTrigger : "#footer"
})
gsap.from(".footer-links", {
  x: -200,
  opacity: 0,
  rotation : 10,
  duration : 1,
  stagger : 0.5,
  scrollTrigger : "#footer"
})
gsap.from(".features-box", {
  x: -200,
  opacity: 0,
  rotation : 50,
  duration : 1,
  stagger: 0.5,
  ease : "power1.inOut",
  scrollTrigger : ".features-box"
})
gsap.from(".best-right", {
  x: 200,
  opacity: 0,
  duration : 1,
  ease : "power1.inOut",
  scrollTrigger : ".best-right"
})
gsap.from(".companies h1", {
  x: 200,
  opacity: 0,
  duration : 1,
  ease : "power1.inOut",
  scrollTrigger: {
    trigger: ".companies",
    scrub : 3,
    start: "0% 80%",
    end: "50% center",
  }
})
gsap.from(".companies h2", {
  x: -200,
  opacity: 0,
  duration : 1,
  ease : "power1.inOut",
  scrollTrigger: {
    trigger: ".companies",
    scrub : 3,
    start: "0% 80%",
    end: "50% center",
  }
})

