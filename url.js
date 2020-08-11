// URL utilities
// Check absolute URL
function isAbsoluteUrl(url){
	try{
		new URL(url);
    return true;
    // OPTION: return new URL(url);
	}catch(err){
		return false;
	}
}

// DEV MORE: https://developer.mozilla.org/en-US/docs/Web/API/URL/URL

// Get Url Search

// DEV OPTION: https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams
/*
let params = (new URL(document.location)).searchParams;
let name = params.get('name'); // is the string "Jonathan Smith".
let age = parseInt(params.get('age')); // is the number 18
*/

/** 
 * @USAGE :
  urlSearch.has("topic") === true; // true
  urlSearch.get("topic") === "api"; // true
  urlSearch.getAll("topic"); // ["api"]
  urlSearch.get("foo") === null; // true
  urlSearch.append("topic", "webdev");
  urlSearch.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
  urlSearch.set("topic", "More webdev");
  urlSearch.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
  urlSearch.delete("topic");
  urlSearch.toString(); // "q=URLUtils.searchParams" 
*/
function urlSearch(url = window.location.search){// k = 'id', url = window.location.search
  return new URLSearchParams(url);// .get(k);
}

export {
  isAbsoluteUrl, 
  urlSearch, 

};
