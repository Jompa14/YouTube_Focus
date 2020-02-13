document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("mode")) {
    return;
  }

  var targetClasses = e.target.classList;
  var chosenMode = 'default';

  if (targetClasses.contains('mode-brain')) {
    chosenMode = 'brain';
  } else if (targetClasses.contains('mode-focus')) {
    chosenMode = 'focus';
  }

  chrome.storage.local.set({
    chosenMode
  });
});
