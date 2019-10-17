document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("mode")) {
    return;
  }

  var chosenMode = e.target.textContent;

  var fileName = "/content_scripts/content_default.js";
  if (chosenMode === 'Brain') {
    fileName = "/content_scripts/content_brain.js";
  } else if (chosenMode === 'Focus') {
    fileName = "/content_scripts/content_focus.js";
  }

  // para injetar o content script na página:
  chrome.tabs.executeScript(null, {
    file: fileName
  }); 

 //para obter a aba ativa:
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    /*para enviar uma mensagem para o content scripts executando na aba ativa. 
    A mensagem irá conter as propriedades do modo escolhido:*/
    chrome.tabs.sendMessage(tabs[0].id, {mode: chosenMode});
  });

});
