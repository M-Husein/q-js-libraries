/** FROM: https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/ */
function disableScroll(){ 
	// Get the current page scroll position 
	let st = window.pageYOffset || document.documentElement.scrollTop; 
	let sl = window.pageXOffset || document.documentElement.scrollLeft;

	// if any scroll is attempted, set this to the previous value 
	window.onscroll = function(e){
		window.scrollTo(sl, st);
		e.preventDefault();// OPTION
	}
}

function enableScroll(){ 
	window.onscroll = noop; 
}

export {
	disableScroll, 
	enableScroll
};
