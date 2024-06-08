
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

var InsuranceImg = document.querySelector(".insurance-img");
var Icursor = document.querySelector(".i-cursor");

InsuranceImg.addEventListener("mousemove", (dets) => {
  Icursor.style.opacity = 1;
  Icursor.style.left = dets.x + "px";
  Icursor.style.top = dets.y + "px";
  gsap.from(Icursor, {
    ease: "expo.out",
    duration : 1,
  })
})
InsuranceImg.addEventListener("mouseleave", (dets) => {
  Icursor.style.opacity = 0;
})


