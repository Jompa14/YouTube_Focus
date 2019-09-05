document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("mode")) {
    return;
  }

  var chosenMode = e.target.textContent;
  
  chrome.tabs.executeScript(null, {
    file: "/content_scripts/content_focus.js" 
  });

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {mode: chosenMode});
  });

});
