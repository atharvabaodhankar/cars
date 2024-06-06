
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
