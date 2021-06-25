'use strict';

{
  const slide = document.getElementById("slide");
  const imgs = [
    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg",
    "img/slide4.jpg",
    "img/slide5.jpg",
    "img/slide6.jpg",
    "img/slide7.jpg",
    "img/slide8.jpg",
    "img/slide9.jpg",
    "img/slide10.jpg",
  ];
  let currentIndex = 0;

  slide.src = imgs[Math.floor(Math.random() * imgs.length)];
  function slideShow() {
    currentIndex = Math.floor(Math.random() * imgs.length);
    slide.src = imgs[currentIndex];
    setTimeout(function () {
      slide.classList.add("fadeout");
    }, 500);
    setTimeout(function () {
      slide.classList.remove("fadeout");
    }, 5000);
    setTimeout(slideShow, 9000);
  }
  slideShow();
}