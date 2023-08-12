export function reveal() {
    var revealElements = document.getElementsByClassName("reveal");
    for (const element of revealElements) {
      var windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      if (
        elementTop <
          windowHeight - element.getBoundingClientRect().height + 150 &&
        elementBottom >= 130
      ) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    }
  }