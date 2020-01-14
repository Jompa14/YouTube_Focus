console.log('vai ter brain');

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

/*var autoplay = document.getElementById('toggle');
if (autoplay && autoplay.checked) {
	autoplay.checked = false;
}*/