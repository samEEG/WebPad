//This script is responsible for controlling 


let word = document.querySelector("#word");



var bgpage = chrome.extension.getBackgroundPage(); 
word.textContent = bgpage.word;

