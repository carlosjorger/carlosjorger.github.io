function reveal() {
  var revealElements = document.getElementsByClassName("reveal");
  [...revealElements].forEach((element) => {
    var windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - (element.getBoundingClientRect().height)) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  })
}
window.addEventListener("scroll", reveal)