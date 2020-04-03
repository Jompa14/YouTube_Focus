chrome.storage.local.get().then(setMode);

chrome.storage.onChanged.addListener(() => {
  chrome.storage.local.get().then(setMode);
});

function setMode(data) {
  if (!data || !data.chosenMode/* || !data.chosenMode.contains(['brain', 'focus', 'default'])*/) {
    console.log('Wrong chosenMode!', data.chosenMode);
    return;
  }

  if (data.chosenMode === 'brain') {
    brain();
  } else if (data.chosenMode === 'focus') {
    focus();
  } else {
    normal();
  }
}

function normal() {
  if (document.getElementById('youtubeFocusBrain')) {
    document.head.removeChild(document.getElementById('youtubeFocusBrain'));
  }
}


function brain() {
  if (document.getElementById('youtubeFocusBrain')) {
    document.head.removeChild(document.getElementById('youtubeFocusBrain'));
  }

  var style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'youtubeFocusBrain';

  style.innerHTML = `
    *[page-subtype~="home"],
    *[href*="/feed/trending"],
    .ytp-endscreen-content,
    #related #contents,
    #related #upnext,
    #related #items,
    #related ytd-compact-video-renderer,
    #related ytd-compact-playlist-renderer,
    #related ytd-compact-radio-renderer,
    .watch-sidebar-body,
    #feed-main-what_to_watch{
      display: none !important;
    }
  `;

  document.head.appendChild(style);
}

function focus() {
  if (document.getElementById('youtubeFocusBrain')) {
    document.head.removeChild(document.getElementById('youtubeFocusBrain'));
  }

  var style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'youtubeFocusBrain';

  style.innerHTML = `
    *[page-subtype~="home"],
    *[href*="/feed/trending"],
    .ytp-endscreen-content,
    #related #contents,
    #related #upnext,
    #related ytd-compact-video-renderer:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4)),
    #related ytd-compact-playlist-renderer,
    #related ytd-compact-radio-renderer:not(:first-child):not(:nth-child(2)):not(:nth-child(3)):not(:nth-child(4)),
    .watch-sidebar-body,
    #feed-main-what_to_watch{
      display: none !important;
    }
  `;

  document.head.appendChild(style);

  /*var autoplay = document.getElementById('toggle');
  if (autoplay && autoplay.checked) {
    autoplay.checked = false;
  }*/
}