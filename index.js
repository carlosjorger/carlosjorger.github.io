function reveal() {
  var revealElements = document.getElementsByClassName("reveal");
  [...revealElements].forEach((element) => {
    var windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    var extraHeight=( element.classList.contains('footer')?0:70);
    if (elementTop < windowHeight - (element.getBoundingClientRect().height)-extraHeight) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  })
}
window.addEventListener("scroll", reveal)