
var highlight = document.getElementById("highlight");
var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var noteInput = document.querySelector("input");
var noteList = document.querySelector("ul");

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

//This sends message to content script saying that one of the buttons has been pressed
function changeTextOnTab(tabs) {
	var message = type;
	var msg = {
		txt: message
	}
	
	chrome.tabs.sendMessage(tabs[0].id, msg); 
}
noteInput.addEventListener("keypress", function enterNote(event) {
	if(event.keyCode === 13) {
		var note = this.value;
		console.log(note);
		this.value = "";
		noteList.innerHTML += "<li>" + note + "</li>";
	}
});