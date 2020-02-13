document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("mode")) {
    return;
  }

  var targetClasses = e.target.classList;
  var chosenMode = 'default';

  var fileName = "/content_scripts/content_default.js";
  if (targetClasses.contains('mode-brain')) {
    fileName = "/content_scripts/content_brain.js";
    chosenMode = 'brain';
  } else if (targetClasses.contains('mode-focus')) {
    fileName = "/content_scripts/content_focus.js";
    chosenMode = 'focus';
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
