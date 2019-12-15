// == Copy ==
function Copy(target, {
	onOk = () => {},
  onErr = () => {}
} = {}){
	if(!navigator.clipboard){
		console.warn('navigator.clipboard not support.');
		return;
	}
	if(!target){
		console.warn('Text to copy or target DOM is required.');
		return;
	}

	let txt;
	if(typeof target === 'string' && !target.tagName) txt = target;
	else txt = target.textContent; // target.innerText.trim()

	// console.log(txt.replace(/\n/gm, ''));
	
	navigator.clipboard.writeText(txt).then(() => onOk(txt))
	.catch(err => onErr(err));
}

// For npm
export {Copy};
