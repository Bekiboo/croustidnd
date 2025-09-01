// Scroll utilities for navigation

export function scrollToTop(behavior: ScrollBehavior = 'smooth') {
	window.scrollTo({ top: 0, behavior });
}

export function scrollToElement(elementId: string, behavior: ScrollBehavior = 'smooth') {
	const element = document.getElementById(elementId);
	if (element) {
		element.scrollIntoView({ behavior, block: 'start' });
		return true;
	}
	return false;
}

export function scrollToAnchor(anchor: string, fallbackToTop = true, behavior: ScrollBehavior = 'smooth') {
	const success = scrollToElement(anchor, behavior);
	if (!success && fallbackToTop) {
		scrollToTop(behavior);
	}
	return success;
}
