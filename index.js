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
  [...document.getElementsByClassName("oscured")].forEach((element) => {
    element.classList.remove("opacity-effect");
  });
}
function addActive(navColumnarMenu) {
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
        navColumnarMenuBackground.style.visibility="hidden";
        navColumnarMenuBackground.classList.remove("active");
        removeActive(navColumnarMenu);
      }
      if (element.id === "show-nav-columnar-menu") {
        navColumnarMenuBackground.style.visibility="visible";
        navColumnarMenuBackground.classList.add("active");
        addActive(navColumnarMenu);
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
        navColumnarMenuBackground.style.visibility="hidden";
        navColumnarMenuBackground.classList.remove("active");
        removeActive(navColumnarMenu);
      }
    },
    false
  );
});
