document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the stored mode value from local storage
  chrome.storage.local.get("chosenMode", function(result) {
    var chosenMode = result.chosenMode || "default";

    // Add the "active" class to the corresponding mode button
    var modeButtons = document.querySelectorAll(".mode");
    modeButtons.forEach(function(button) {
      if (button.classList.contains("mode-" + chosenMode)) {
        button.classList.add("active");
      }
    });

    // Add ">" symbol at the beginning and "<" symbol at the end of the selected mode button text
    var activeButton = document.querySelector(".mode.active");
    if (activeButton) {
      var buttonText = activeButton.textContent.trim();
      activeButton.textContent = ">" + buttonText + "<";
    }
  });
});

document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("mode")) {
    return;
  }

  var targetClasses = e.target.classList;
  var chosenMode = "default";

  if (targetClasses.contains("mode-brain")) {
    chosenMode = "brain";
  } else if (targetClasses.contains("mode-focus")) {
    chosenMode = "focus";
  }

  var active = e.target.parentNode.querySelector(".active");
  if (active) {
    active.classList.remove("active");
    active.textContent = active.textContent.substring(1, active.textContent.length - 1); // Remove both ">" and "<" symbols
  }

  e.target.classList.add("active");
  e.target.textContent = ">" + e.target.textContent.trim() + "<"; // Add ">" and "<" symbols

  // Store the chosen mode in local storage
  chrome.storage.local.set({
    chosenMode: chosenMode
  });
});
