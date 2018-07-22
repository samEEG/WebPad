
var button = document.getElementById("highlight");
button.addEventListener("click", function() {
	//console.log("button pressed");
	params = {
		active: true, 
		currentWindow: true
	};
	chrome.tabs.query(params, changeTextOnTab);
});


function changeTextOnTab(tabs) {
	var message = "highlight";
	var msg = {
		txt: message
	}
	
	chrome.tabs.sendMessage(tabs[0].id, msg); 
}


