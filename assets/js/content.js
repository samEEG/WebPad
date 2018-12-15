console.log("Chrome Extension go");


//Listen for message from content script 
var selectedText = ""; 

function gotMessage(request, sender, sendResponse) {
	console.log(request.txt);			
	var selection= window.getSelection().getRangeAt(0);
	var selectedText = selection.extractContents();
	var span= document.createElement("span");
	if(request.txt === "highlight") {	
		span.style.backgroundColor = "yellow";
	}
	else if(request.txt == "bold") {
		span.style.fontWeight = 'bold';
	}
	else if(request.txt == "italic") {
		span.style.fontStyle = "italic"
	}
	span.appendChild(selectedText);
	selection.insertNode(span);
}


window.addEventListener("mouseup", function wordSelected() {
	selectedText = window.getSelection().toString(); 
	if(selectedText.length > 0) {
		chrome.runtime.onMessage.addListener(gotMessage);	
		//console.log(message);
		//chrome.runtime.sendMessage(message); 
		chrome.runtime.onMessage.addListener(gotMessage);  // Listens for button to be pressed 
	}
});
