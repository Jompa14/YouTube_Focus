document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("mode")) {
    return;
  }

  var chosenMode = e.target.textContent;
  
  // para injetar o content script na página:
  chrome.tabs.executeScript(null, {
    file: "/content_scripts/content_focus.js" 
  }); 

 //para obter a aba ativa:
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    /*para enviar uma mensagem para o content scripts executando na aba ativa. 
    A mensagem irá conter as propriedades do modo escolhido:*/
    chrome.tabs.sendMessage(tabs[0].id, {mode: chosenMode});
  });

});
