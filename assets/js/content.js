console.log("Chrome Extension go");


console.log("Chrome Extension go");

window.addEventListener("mouseup", wordSelected); 




function wordSelected() {
	var selectedText = window.getSelection().toString(); 
	if(selectedText === ""){
		return; 
	}
	let message = {
		text: selectedText
	}
	console.log(message);
	chrome.runtime.sendMessage(message); 
	var selection= window.getSelection().getRangeAt(0);
	var selectedText = selection.extractContents();
	var span= document.createElement("span");
	span.style.backgroundColor = "yellow";
	span.appendChild(selectedText);
	selection.insertNode(span);
}

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