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

// ############### BUTTON ####################
function clickExtendedText(event) {
    let text = document.getElementById('ctn1');

    if (text.classList.contains('closed')) {
        text.classList.remove('closed');
    } else {
        text.classList.add('closed');
    }
}

function clickExtendedText2(event) {
    let text = document.getElementById('ctn2');

    if (text.classList.contains('closed')) {
        text.classList.remove('closed');
    } else {
        text.classList.add('closed');
    }
}

let firstBtn = document.getElementById('btn1');
firstBtn.addEventListener('click', clickExtendedText);

let secondBtn = document.getElementById('btn2');
secondBtn.addEventListener('click', clickExtendedText2);
// ############### BUTTON ####################