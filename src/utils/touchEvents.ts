function togleVisibility(element: HTMLDivElement) {
	const visibility = element.style.visibility;
	if (!visibility || visibility === 'hidden') {
		element.style.visibility = 'visible';
	} else {
		element.style.visibility = 'hidden';
	}
}
function changeColumnNavbarVisibility(columnNavbar: HTMLDivElement) {
	togleVisibility(columnNavbar);
	const changeableElements = document.getElementsByClassName('changeable');
	for (const changeableElement of changeableElements) {
		changeableElement.classList.toggle('active');
	}
}
export function touchOutsideColumnNavbar(event: TouchEvent) {
	const [columnNavbarBackground] = document.getElementsByClassName(
		'nav-columnar-menu-background'
	);

	const columnNavbar = document.getElementById('nav-columnar-menu');

	const touchedElement = event.targetTouches[0].target;

	if (
		touchedElement instanceof Node &&
		columnNavbarBackground instanceof HTMLDivElement &&
		columnNavbarBackground.contains(touchedElement) &&
		!columnNavbar.contains(touchedElement)
	) {
		changeColumnNavbarVisibility(columnNavbarBackground);
	}
}
export function touchIcon() {
	const [navColumnarMenuBackground] = document.getElementsByClassName(
		'nav-columnar-menu-background'
	);
	if (navColumnarMenuBackground instanceof HTMLDivElement) {
		changeColumnNavbarVisibility(navColumnarMenuBackground);
	}
}
