'use strict';

{
  const menu = document.getElementById("h-menu");
  const overlay = document.querySelector(".overlay");
  const close = document.getElementById("h-close");
  const list1 = document.getElementById("list1");
  const list2 = document.getElementById("list2");
  const list3 = document.getElementById("list3");
  const m1 = document.getElementById("1");
  const m2 = document.getElementById("2");
  const m3 = document.getElementById("3");
  const rect1 = m1.getBoundingClientRect();
  const position1 = rect1.top + window.pageYOffset - 50;
  const rect2 = m2.getBoundingClientRect();
  const position2 = rect2.top + window.pageYOffset - 50;
  const rect3 = m3.getBoundingClientRect();
  const position3 = rect3.top + window.pageYOffset - 50;

  menu.addEventListener("click", () => {
    overlay.classList.add("show");
  });

  close.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  list1.addEventListener("click", () => {
    window.scrollTo({
      top: position1,
      behavior: "smooth",
    });
    close.click();
  });

  list2.addEventListener("click", () => {
    window.scrollTo({
      top: position2,
      behavior: "smooth",
    });
    close.click();
  });

  list3.addEventListener("click", () => {
    window.scrollTo({
      top: position3,
      behavior: "smooth",
    });
    close.click();
  });
}