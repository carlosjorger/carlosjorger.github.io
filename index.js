function reveal(){
    var revealElements=document.getElementsByClassName("reveal");
    [...revealElements].forEach((element)=>{
        var windowHeight = window.innerHeight;
        var elementTop = element.getBoundingClientRect().top;
        console.log(elementTop,windowHeight)
        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
          } else {
            element.classList.remove("active");
          }
    })
}
window.addEventListener("scroll",reveal)