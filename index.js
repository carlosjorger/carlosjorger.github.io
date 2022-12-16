function reveal() {
  var revealElements = document.getElementsByClassName("reveal");
  [...revealElements].forEach(element => {
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

  [...document.getElementsByClassName("changeable")].forEach(element => {
    element.classList.toggle("active");
  });
}
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", function (event) {
  [...document.getElementsByClassName("change-sidebar")].forEach(function (
    element
  ) {
    element.addEventListener("click", () => {
      const navColumnarMenu = document.getElementById("nav-columnar-menu");
      const navColumnarMenuBackground = document.getElementsByClassName(
        "nav-columnar-menu-background"
      )[0];
      changeState(navColumnarMenu, navColumnarMenuBackground);
    });
  });
  document.addEventListener(
    "touchstart",
    ev => {
      const navColumnarMenu = document.getElementById("nav-columnar-menu");
      const navColumnarMenuBackground = document.getElementsByClassName(
        "nav-columnar-menu-background"
      )[0];
      if (ev.path[0].classList.contains("nav-columnar-menu-background")) {
        changeState(navColumnarMenu, navColumnarMenuBackground);
      }
    },
    false
  );
});
