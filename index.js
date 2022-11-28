function reveal() {
  var revealElements = document.getElementsByClassName("reveal");
  [...revealElements].forEach((element) => {
    var windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if ((elementTop < windowHeight - (element.getBoundingClientRect().height))) {
      // if(element.id=='open-ecommerce'){
      //   console.log(windowHeight,element.getBoundingClientRect())
      // }
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  })
}
window.addEventListener("scroll", reveal)
document.addEventListener("DOMContentLoaded", function (event) {
  [...document.getElementsByTagName("a")].forEach(
    function (element) {
      element.addEventListener('click', function () {
        const navColumnarMenu = document.getElementById('nav-columnar-menu');
        if (navColumnarMenu.classList.contains('active')) {
          navColumnarMenu.classList.remove("active");
        }
        else if(element.id==='show-nav-columnar-menu'){
          navColumnarMenu.classList.add("active");
        }

      })
    }
  )
  // Your code to run since DOM is loaded and ready
})
// ([...document.getElementsByTagName('a')]).forEach(
//     // (a)=>{

//     // }
//     // (element=>{
//     //   element.addEventListener('click',function(){
//     //     console.log('aaaaaaaaa')
//     //   })
//     // })
// )