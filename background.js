console.log("Background running");

chrome.runtime.onMessage.addListener(receiver);


//window.word = "coding train";
function receiver(request, sender, sendResponse){
	console.log(request);
	window.word = request.text; 
}