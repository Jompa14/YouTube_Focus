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

  var active = e.target.parentNode.querySelector(".active");
  if (active) {
    active.classList.remove("active");
  }

  e.target.classList.add("active");

  chrome.storage.local.set({
    chosenMode
  });
});
