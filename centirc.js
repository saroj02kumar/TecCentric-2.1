let menutoggle = document.querySelector("#hidden-menubar");
let sidebar = document.querySelector(".nav");

menutoggle.addEventListener("click", () => {
  sidebar.classList.toggle("navx");
});

var slides = document.querySelectorAll(".slide");
var btns = document.querySelectorAll(".btn");
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 5000);
  };
  repeater();
};
repeat();

//     window.addEventListener("load", ()=>{

let cards = document.querySelectorAll(".service .card");
let cards2 = document.querySelectorAll(".casestudy .card2");
//     cards.forEach((e)=>{
//       console.log(e);
//         e.style.transform = "scale(0.5)"

// })

let serviceSubheading = document.querySelector(".service h4");
let serviceHeading = document.querySelector(".section-heading");


let promoLeft = document.querySelector(".promo .left");
let promoRight = document.querySelector(".promo .right");


let caseStudyLeft = document.querySelector(".casestudy .left");
let caseStudyRight = document.querySelector(".casestudy .right");

//       let  promoLeftDiv = document.querySelector(".promo .left")
//       let  promoRightDiv = document.querySelector(".promo .right")

//       let  promo = document.querySelector(".promo")
//      console.log(cards);
//     window.addEventListener("scroll",()=>{
//    console.log("yes scrolling");
//       serviceSubheading.style.transform = "translate(50px,0px)"
//       serviceSubheading.style.transition = "all 2s ease"
//          serviceHeading.style.transform = "rotate(360deg)"
//          serviceHeading.style.transition = "all 2s ease"

//          cards.forEach((e)=>{
//                 console.log(e);
//                   e.style.transform = "scale(1)"
//                   e.style.transition = "all 4s ease"
//          })

//     })
//     promoRightDiv.style.transform = "translate(0px,-40px)"

// console.log(promo);
// promo.addEventListener("mouseover",()=>{
//   console.log("promo scrolling");
//   promoLeftDiv.style.transform = "translate(60px,0px)"
//   promoLeftDiv.style.transition = "all 1s ease"
//   promoRightDiv.style.transform = "translate(0px,0px)"
//   promoRightDiv.style.transition = "all 1s linear"
//   promoRightDiv.style.opacity = "1"

// })

let sections = document.querySelectorAll("section")

// window.addEventListener("scroll", () => {
    

//   sections.forEach((e)=>{

//   console.log(e.offsetTop);
// let top = window.scrollY;
// let offset = e.offsetTop
// let height  = e.offsetHeight


//             if( top>= offset && top < offset + height){
            
//               serviceSubheading.style.display = "block";
                
//             }else{

//                 serviceHeading.style.display="none"

//             }

//   })


  // if (window.pageYOffset > 100) {
  //   console.log(pageYOffset);
  //   console.log(serviceHeading);


  //   serviceSubheading.style.display = "block";
  

  // }

  
  // if (window.pageYOffset > 750) {
  //   console.log(pageYOffset);
  //   console.log(serviceHeading);


  //   caseStudyLeft.style.display = "block";
  //   cards2.forEach((e) => {
  //     console.log(e);
  //     e.style.display = "block";
   
  //   });
    
  

  // }


  
  // if (window.pageYOffset < 750) {
  //   console.log(pageYOffset);
  //   console.log(serviceHeading);


  //   caseStudyLeft.style.display = "none";
  //   cards2.forEach((e) => {
  //     console.log(e);
  //     e.style.display = "none";
    
  //   });
  

  // }



  // if (window.pageYOffset > 1300) {
  //   console.log(pageYOffset);
  //   console.log(serviceHeading);


  //   promoLeft.style.display = "block";
    
  //   promoRight.style.display = "block";
  

  // }


  // if (window.pageYOffset < 1300) {
  //   console.log(pageYOffset);
  //   console.log(serviceHeading);


  //   promoLeft.style.display = "none";
  //   promoRight.style.display = "none";

  

  // }

  // if (window.pageYOffset<100) {

  //   serviceSubheading.style.display = "none";
  // }




// });

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 150) {
//     cards.forEach((e) => {
//       console.log(e);
//       e.style.display = "block";
//       e.style.display = "block";
//     });
//   //   cards.forEach((e) => {
//   //     console.log(e);

//   //     e.style.transform = "scale(1)";
//   //     e.style.transition = "all 4s ease";
//   //   });
//    }
//   if (window.pageYOffset < 50) {
//     cards.forEach((e) => {
//       console.log(e);
//       e.style.display = "none";
//       e.style.display = "none";
//     });
//     // serviceHeading.style.transform = "none";
//     // serviceHeading.style.transition = "none";
//   }
// });
