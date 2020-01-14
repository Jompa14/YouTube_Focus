console.log('vai ter focus');

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