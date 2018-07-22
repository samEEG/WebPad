var word = document.querySelector("#word");

var bgpage = chrome.extension.getBackgroundPage(); 
word.textContent = bgpage.word;

