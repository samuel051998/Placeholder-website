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

// ############### CAROUSEL ####################
let slideIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName('slide');

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'; 
    }

    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    } 

    x[slideIndex-1].style.display = 'block';
    setTimeout(carousel, 4000); 
}

let slideIndex2 = 0;
carousel2();

function carousel2() {
    let i;
    let x = document.getElementsByClassName('slide-image');
    for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none'; 
    }
    slideIndex2++;
    if (slideIndex2 > x.length) {slideIndex2 = 1;} 
    x[slideIndex2-1].style.display = 'block'; 
    setTimeout(carousel2, 4000); 
}
// ############### CAROUSEL ####################
let slideIndex3 = 0;
carousel3();

function carousel3() {
    let i;
    let x = document.getElementsByClassName('changeSlide');

    for (i=0; i < x.length; i++) {
        x[i].classList.contains('no-active');
    }
        
        slideIndex3++;
    
    if (slidex3 > x.length) {
        slideIndex3 = 1;
    }

    x[slideIndex3-1].classList.replace('active');
    setTimeout(carousel3, 4000);
} 