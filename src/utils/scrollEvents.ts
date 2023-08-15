export function reveal() {
    var revealElements = document.getElementsByClassName("reveal");
    var windowHeight = window.innerHeight;
    for (const element of revealElements) {
      const {top, bottom} = element.getBoundingClientRect();
      if (
        top <= windowHeight - 100 &&
        bottom >= 100
      ) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }