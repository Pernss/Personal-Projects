let count = 0;
let homePoint = 0;
let homeFoulCount = 0;

let guestPoint = 0;
let guestFoulCount = 0;


let timerEl = document.getElementById('timer');

let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

let homeFoul = document.getElementById('home-foul');
let guestFoul = document.getElementById('guest-foul');

const startingMinutes = 12;

let time = startingMinutes * 60;

let isPaused = true;


var countDown = setInterval(function() {
    
    if(isPaused == false) {
        const minutes = Math.floor( time / 60 );
        let seconds = time % 60;
        seconds = seconds < 12 ? '0' + seconds : seconds;
        timerEl.innerHTML = `${minutes}:${seconds}`
        time--

        if(time == 0 ) {
            timerEl.textContent = "GAME SET";
        }
    }
}, 1000);

function timeOut() {
    isPaused = true;
}

function resumeGame() {
    isPaused = false;
}

function refreshTimer() {
    count += 1;
    time = startingMinutes * 60;
    homeFoulCount = 0;
    guestFoulCount = 0;

    homeFoul.textContent = homeFoulCount;
    guestFoul.textContent = guestFoulCount;

    switch(count) {
        case 1: 
            isPaused = true;
            document.getElementById('period').textContent = "2";
            timerEl.textContent = "12:00";
            clearInterval(time);
            break;
        case 2:
            isPaused = true;
            document.getElementById('period').textContent = "3";
            timerEl.textContent = "12:00";
            clearInterval(time);
            break;
        case 3:
            isPaused = true;
            document.getElementById('period').textContent = "4";
            timerEl.textContent = "12:00";
            clearInterval(time);
            break;
        default:
            isPaused = true;
            document.getElementById('period').textContent = "END";
            timerEl.textContent = "12:00";
            clearInterval(time);
    }
}

function homeOnePoint() {
    homePoint++
    homeScore.textContent = homePoint;
    isPaused = true;
}

function homeTwoPoints() {
    homePoint += 2;
    homeScore.textContent = homePoint;
    isPaused = true;
}

function homeThreePoints() {
    homePoint += 3;
    homeScore.textContent = homePoint;
    isPaused = true;
}

function guestOnePoint() {
    guestPoint++
    guestScore.textContent = guestPoint;
    isPaused = true;
}

function guestTwoPoints() {
    guestPoint += 2;
    guestScore.textContent = guestPoint;
    isPaused = true;
}

function guestThreePoints() {
    guestPoint += 3;
    guestScore.textContent = guestPoint;
    isPaused = true;
}

function homeFoulCounter() {
    homeFoulCount++
    homeFoul.textContent = homeFoulCount;
    isPaused = true;
}

function guestFoulCounter() {
    guestFoulCount++
    guestFoul.textContent = guestFoulCount;
    isPaused = true;
}

function newGame() {
    homeFoulCount = 0;
    homePoint = 0;
    guestFoulCount = 0;
    guestPoint = 0;

    guestFoul.textContent = guestFoulCount;
    homeFoul.textContent = homeFoulCount;

    guestScore.textContent = guestPoint;
    homeScore.textContent = homePoint;

    time = startingMinutes * 60;
    isPaused = true;
    timerEl.textContent = "12:00";
    document.getElementById('period').textContent = "1";
    clearInterval(time);

}