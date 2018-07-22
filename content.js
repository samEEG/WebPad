console.log("Chrome Extension go");

window.addEventListener("mouseup", wordSelected); 

function wordSelected() {
	var selectedText = window.getSelection().toString(); 
	if(selectedText.length > 0){
		let message = {
			text: selectedText
		}
		console.log(message);
		chrome.runtime.sendMessage(message); 
	}
}