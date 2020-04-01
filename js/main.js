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
        gameSection.classList.add('longPage2');
        btn1.classList.add('hidden');
        btn2.classList.remove('hidden');
        
    } else {
        text.classList.add('closed');
        gameSection.classList.remove('longPage2');
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
    setTimeout(carousel, 15000); 
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

    if (slideIndex2 > x.length) {
        slideIndex2 = 1;
    } 
   
    x[slideIndex2-1].style.display = 'block'; 
    setTimeout(carousel2, 15000); 
}
// ############### CAROUSEL ####################

// ############### BTN FULL SCREEN ###############
$(document).ready(function(){
    $("#expand1").click(function(e) {
        $("#slide1").toggleClass("fullscreen");
        $("#slide1").toggleClass("fadeIn animated");
        $(".fa").toggleClass("fa-times");
        $(".btnLogo").toggleClass("hidden");
    });

    $("#expand2").click(function(e) {
        $("#slide2").toggleClass("fullscreen");
        $("#slide2").toggleClass("fadeIn animated");
        $(".fa").toggleClass("fa-times");
        $(".btnLogo").toggleClass("hidden");
    });

    $("#expand3").click(function(e) {
        $("#slide3").toggleClass("fullscreen");
        $("#slide3").toggleClass("fadeIn animated");
        $(".fa").toggleClass("fa-times");
        $(".btnLogo").toggleClass("hidden");
    });

    $("#expand4").click(function(e) {
        $("#slide4").toggleClass("fullscreen");
        $("#slide4").toggleClass("fadeIn animated");
        $(".fa").toggleClass("fa-times");
        $(".btnLogo").toggleClass("hidden");
    });

    $("#expand5").click(function(e) {
        $("#slide5").toggleClass("fullscreen");
        $("#slide5").toggleClass("fadeIn animated");
        $(".fa").toggleClass("fa-times");
        $(".btnLogo").toggleClass("hidden");
    });

    $("#expand6").click(function(e) {
        $("#slide6").toggleClass("fullscreen");
        $("#slide6").toggleClass("fadeIn animated");
        $(".fa").toggleClass("fa-times");
        $(".btnLogo").toggleClass("hidden");
    });

});
// ############### BTN FULL SCREEN ###############