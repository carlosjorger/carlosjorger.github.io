// TODO: try to use requestAnimationFrame https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
function hideRevealElement(element: Element, isScrollingDown: boolean) {
	const { top, bottom } = element.getBoundingClientRect();
	const isActive = top <= window.innerHeight - 100 && bottom >= 100;
	const [targetClass, oldclass] = isScrollingDown
		? ['inactive-down', 'inactive-up']
		: ['inactive-up', 'inactive-down'];

	if (element.classList.contains(oldclass)) {
		element.classList.replace(oldclass, targetClass);
	} else {
		element.classList.toggle(targetClass, !isActive);
	}
}
export function hideRevealElements() {
	const isScrollingDown = window.scrollY > (this.lastScrollTop || 0);
	const revealElements = document.getElementsByClassName('reveal');
	for (const element of revealElements) {
		hideRevealElement(element, isScrollingDown);
	}
	this.lastScrollTop = window.scrollY;
}
export function activeLinkBySection(section: HTMLElement) {
	const limit = window.innerHeight * 0.4;
	const { top, bottom } = section.getBoundingClientRect();
	const isInsideTheSection = top < limit && bottom > limit;
	const anchors = document.getElementsByClassName(`link-${section.id}`);
	for (const anchor of anchors) {
		anchor.classList.toggle('active', isInsideTheSection);
	}
}
