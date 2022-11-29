function reveal() {
  var revealElements = document.getElementsByClassName("reveal");
  [...revealElements].forEach((element) => {
    var windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - element.getBoundingClientRect().height) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", reveal);
function removeActive(navColumnarMenu) {
  navColumnarMenu.classList.remove("active");
  document.getElementsByTagName("main")[0].classList.remove("opacity-effect");
  document
    .getElementsByClassName("nav-header-menu")[0]
    .classList.remove("opacity-effect");
}
function addActive(navColumnarMenu) {
  navColumnarMenu.classList.add("active");
  document.getElementsByTagName("main")[0].classList.add("opacity-effect");
  document
    .getElementsByClassName("nav-header-menu")[0]
    .classList.add("opacity-effect");
}
document.addEventListener("DOMContentLoaded", function (event) {
  [...document.getElementsByTagName("a")].forEach(function (element) {
    element.addEventListener("click", () => {
      const navColumnarMenu = document.getElementById("nav-columnar-menu");
      if (navColumnarMenu.classList.contains("active")) {
        removeActive(navColumnarMenu);
      }
      if (element.id === "show-nav-columnar-menu") {
        addActive(navColumnarMenu);
      }
    });
  });
  document.addEventListener(
    "touchstart",
    (ev) => {
      const navColumnarMenu = document.getElementById("nav-columnar-menu");
      if (
        ev.path.some(
          (element) =>
            element.tagName === "MAIN" ||
            element.classList?.contains("nav-header-menu")
        )
      ) {
        removeActive(navColumnarMenu);
      }
    },
    false
  );
});
