// TODO: try to use requestAnimationFrame https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
export function reveal() {
    const revealElements = document.getElementsByClassName("reveal");
    const isScrollingDown = (window.scrollY > (this.lastScrollTop || 0));
    const windowHeight = window.innerHeight;
    for (const element of revealElements) {
      const {top, bottom} = element.getBoundingClientRect();
      const isActive =  top <= windowHeight - 100 && bottom >= 100;
      const [targetClass,oldclass]= isScrollingDown?
                                    ["inactive-down","inactive-up"]
                                    :["inactive-up","inactive-down"]
                                    
      if (element.classList.contains(oldclass)) {
        element.classList.replace(oldclass,targetClass)
      }
      else{
        element.classList.toggle(targetClass,!isActive)
      }
    }
    this.lastScrollTop = window.scrollY;
  }

  export function updateLink(section: HTMLElement,sectionId:string ,limit:number) {
    const {top,bottom} = section.getBoundingClientRect();
    const isInsideTheSection= top<limit&&bottom>limit;
    const anchors = document.getElementsByClassName(`link-${sectionId}`)
    for (const anchor of anchors) {
      anchor.classList.toggle('active',isInsideTheSection)
    }
  }