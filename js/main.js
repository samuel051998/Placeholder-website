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
    let gameSection = document.getElementById('gioco');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn1x');

    if (text.classList.contains('closed')) {
        text.classList.remove('closed');
        gameSection.classList.add('longPage');
        btn1.classList.add('hidden');
        btn2.classList.remove('hidden');
    } else {
        text.classList.add('closed');
        gameSection.classList.remove('longPage');
        btn1.classList.remove('hidden');
        btn2.classList.add('hidden');
    }
}

function clickExtendedText2(event) {
    let text = document.getElementById('ctn2');
    let gameSection = document.getElementById('gioco');
    let btn1 = document.getElementById('btn2');
    let btn2 = document.getElementById('btn2x');

    if (text.classList.contains('closed')) {
        text.classList.remove('closed');
        gameSection.classList.add('longPage');
        btn1.classList.add('hidden');
        btn2.classList.remove('hidden');
    } else {
        text.classList.add('closed');
        gameSection.classList.remove('longPage');
        btn1.classList.remove('hidden');
        btn2.classList.add('hidden');
    }
}

let firstBtn = document.getElementById('btn1');
let firstBtnx = document.getElementById('btn1x');
firstBtn.addEventListener('click', clickExtendedText);
firstBtnx.addEventListener('click', clickExtendedText);

let secondBtn = document.getElementById('btn2');
let secondBtnx = document.getElementById('btn2x');
secondBtn.addEventListener('click', clickExtendedText2);
secondBtnx.addEventListener('click', clickExtendedText2);
// ############### BUTTON ####################