function reveal() {
  var revealElements = document.getElementsByClassName("reveal");
  [...revealElements].forEach((element) => {
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
  });
}
function changeState(navColumnarMenu, navColumnarMenuBackground) {
  if (
    !navColumnarMenuBackground.style.visibility ||
    navColumnarMenuBackground.style.visibility === "hidden"
  ) {
    navColumnarMenuBackground.style.visibility = "visible";
  } else {
    navColumnarMenuBackground.style.visibility = "hidden";
  }
  navColumnarMenuBackground.classList.toggle("active");
  navColumnarMenu.classList.toggle("active");
  document.getElementsByClassName("logo")[0].classList.toggle("active");
  [...document.getElementsByClassName("oscured")].forEach((element) => {
    element.classList.toggle("opacity-effect");
  });
}
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", function (event) {
  [...document.getElementsByTagName("a")].forEach(function (element) {
    element.addEventListener("click", () => {
      const navColumnarMenu = document.getElementById("nav-columnar-menu");
      const navColumnarMenuBackground = document.getElementById(
        "nav-columnar-menu-background"
      );
      if (
        navColumnarMenu.classList.contains("active") ||
        element.id === "show-nav-columnar-menu"
      ) {
        changeState(navColumnarMenu, navColumnarMenuBackground);
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
      if (ev.path[0].id == "nav-columnar-menu-background") {
        changeState(navColumnarMenu, navColumnarMenuBackground);
      }
    },
    false
  );
});
