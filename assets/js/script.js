
var highlight = document.getElementById("highlight");
var bold = document.getElementById("bold");
var italic = document.getElementById("italic");

var type = ""

//Highlight Button 
highlight.addEventListener("click", function() {
	//console.log("button pressed");
	params = {
		active: true, 
		currentWindow: true
	};
	chrome.tabs.query(params, changeTextOnTab.bind("highlight"));
	type = "highlight";
});

//Bold Button 
bold.addEventListener("click", function() {
	//console.log("button pressed");
	params = {
		active: true, 
		currentWindow: true
	};
	chrome.tabs.query(params, changeTextOnTab.bind("highlight"));
	type = "bold";
});

//Italic button 
italic.addEventListener("click", function() {
	//console.log("button pressed");
	params = {
		active: true, 
		currentWindow: true
	};
	chrome.tabs.query(params, changeTextOnTab.bind("highlight"));
	type = "italic";
});






function changeTextOnTab(tabs) {
	var message = type;
	var msg = {
		txt: message
	}
	
	chrome.tabs.sendMessage(tabs[0].id, msg); 
}


