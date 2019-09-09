if (!document.getElementById('youtubeFocusBrain')) {
	var style = document.createElement('style');
	style.type = 'text/css';
	style.id = 'youtubeFocusBrain';
	style.innerHTML = '.style-scope.ytd-compact-video-renderer { display: none; }';
	style.innerHTML += '.style-scope.ytd-compact-radio-renderer { display: none; }';
	style.innerHTML += '.style-scope.ytd-compact-playlist-renderer { display: none; }';
	style.innerHTML += '.ytp-endscreen-content { display: none; }';
	style.innerHTML += '.style-scope.ytd-shelf-renderer { display: none; }';
	document.head.appendChild(style);

	/*var autoplay = document.getElementById('toggle');
	if (autoplay && autoplay.checked) {
		autoplay.checked = false;
	}*/
}
