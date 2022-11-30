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
function removeActive(navColumnarMenu,navColumnarMenuBackground) {
  navColumnarMenuBackground.style.visibility="hidden";
  navColumnarMenuBackground.classList.remove("active");
  navColumnarMenu.classList.remove("active");
  [...document.getElementsByClassName("oscured")].forEach((element) => {
    element.classList.remove("opacity-effect");
  });
}
function addActive(navColumnarMenu,navColumnarMenuBackground) {
  navColumnarMenuBackground.style.visibility="visible";
  navColumnarMenuBackground.classList.add("active");
  navColumnarMenu.classList.add("active");
  [...document.getElementsByClassName("oscured")].forEach((element) => {
    element.classList.add("opacity-effect");
  });
}
document.addEventListener("DOMContentLoaded", function (event) {
  [...document.getElementsByTagName("a")].forEach(function (element) {
    element.addEventListener("click", () => {
      const navColumnarMenu = document.getElementById("nav-columnar-menu");
      const navColumnarMenuBackground = document.getElementById(
        "nav-columnar-menu-background"
      );
      if (navColumnarMenu.classList.contains("active")) {
        removeActive(navColumnarMenu,navColumnarMenuBackground);
      }
      if (element.id === "show-nav-columnar-menu") {
        addActive(navColumnarMenu,navColumnarMenuBackground);
      }
    });
  });
  document.addEventListener(
    "touchstart",
    (ev) => {
      const navColumnarMenu = document.getElementById("nav-columnar-menu");
      const navColumnarMenuBackground = document.getElementById(
        "nav-columnar-menu-background"
      );
      if (ev.path[0].id=='nav-columnar-menu-background') {
        removeActive(navColumnarMenu,navColumnarMenuBackground);
      }
    },
    false
  );
});
