export function activeLinkBySection(section: HTMLElement) {
	const limit = window.innerHeight * 0.4;
	const { top, bottom } = section.getBoundingClientRect();
	const isInsideTheSection = top < limit && bottom > limit;
	const anchors = document.getElementsByClassName(`link-${section.id}`);
	for (const anchor of anchors) {
		anchor.classList.toggle('active', isInsideTheSection);
	}
}
