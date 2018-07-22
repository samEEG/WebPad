console.log("Background running");

chrome.runtime.onMessage.addListener(receiver);


function receiver(request, sender, sendResponse){

	window.word = request.text; 	
	console.log(window.word);
}