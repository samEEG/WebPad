console.log("Chrome Extension go");


//Listen for message from content script 
var selectedText = ""; 

function gotMessage(request, sender, sendResponse) {
	console.log(request.txt);
	if(request.txt === "highlight") {	
			var selection= window.getSelection().getRangeAt(0);
			var selectedText = selection.extractContents();
			var span= document.createElement("span");
			span.style.backgroundColor = "yellow";
			span.appendChild(selectedText);
			selection.insertNode(span);
	}
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



// function wordSelected() {
// 	var text = "";

// 	if (window.getSelection) {
// 		text = window.getSelection().toString();
// 		if(text === "") {
// 			return; 
// 		}
// 	} 
// 	else if (document.selection && document.selection.type != "Control") {
// 		text = document.selection.createRange().text;
// 	}
// 	var x =	window.getSelection().getRangeAt(0).surroundContents(highlightElement);
// 	console.log(x);

// 	console.log(text);
// }

// function wordSelected() {
// 	var text = window.getSelection().toString();
// 	if(text === "") {
// 		return; 
// 	}
// 	console.log(text); 
// 	var selection= window.getSelection().getRangeAt(0);
// 	var selectedText = selection.extractContents();
// 	var span= document.createElement("span");
// 	span.style.backgroundColor = "yellow";
// 	span.appendChild(selectedText);
// 	selection.insertNode(span);
// }