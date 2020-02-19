/*var scroller = new SmoothScroll({
    target: document.querySelector('#scroll-container'),
    scrollEase: 0.1,
    maxOffset: 500
});*/


 // ############### PARALLAX ####################
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
// ############### PARALLAX ####################


// ############### YOUTUBE PLAYER ####################
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    player.mute();
    player.playVideo();
}
// ############### YOUTUBE PLAYER ####################
