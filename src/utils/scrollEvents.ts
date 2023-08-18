export function reveal() {
    const revealElements = document.getElementsByClassName("reveal");
    const windowHeight = window.innerHeight;
    for (const element of revealElements) {
      const {top, bottom} = element.getBoundingClientRect();
      if (
        top <= windowHeight - 100 &&
        bottom >= 100
      ) {
        element.classList.remove("inactive");
      } else {
        element.classList.add("inactive");
      }
    }
  }
  export function updateLink(section: HTMLElement,sectionId:string ,limit:number) {
    const {top,bottom} = section.getBoundingClientRect();
    const isInsideTheSection= top<limit&&bottom>limit;
    const anchor = document.getElementById(`link-${sectionId}`)
    anchor.classList.toggle('active',isInsideTheSection)
  }