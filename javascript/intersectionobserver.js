"use strict";

{
  const targets = document.querySelectorAll(".individual");

  function callback(entries, obs) {
    entries.forEach((entry) => {
      // if (entry.isIntersecting) {
      //   entry.target.classList.add("appear");
      // } else {
      //   entry.target.classList.remove("appear");
      // }

      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        obs.unobserve(entry.target);
      }
    });
  }

  const options = {
    threshold: .3,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach((target) => {
    observer.observe(target);
  });
}
