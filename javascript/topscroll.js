'use strict';

{
  const up = document.getElementById("up");

  function getScrolled() {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : document.documentElement.scrollTop;
  }

  window.onscroll = function () {
    if (getScrolled() > 200) {
      up.classList.add("hide");
    } else {
      up.classList.remove("hide");
    }
  };

  up.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}