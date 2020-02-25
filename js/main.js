



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

new SimpleBar(document.getElementById('scroll'), { autoHide: false });
