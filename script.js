//model
const app = document.getElementById('app');
let image = 'img/Start_screen.png';
let carImg = 'img/Car.png'
let music;

let carMovement = {
    position: 0,
    direction: 1,
    speed: 2
};

//view


startScreen();
function startScreen() {
    app.innerHTML = /*html*/ `
        <div class="backgroundImage" onclick="CloseScreen()"></div>
        <div class="byTeam">By Team 2 Class B StartIT</div>
    `;
}

function gameRun() {
    app.innerHTML = /*html*/`
        <div class="gameContainer">
        <button class="resumePlay" onclick="pauseMusic()">pause music</button>
        <button class="resumePlay" onclick="resumeMusic()">resume music</button>
        <div id="road">
            <div class="car"><img src="img/Car.png" alt="car"></div>
        </div>
    `;

}

function CloseScreen() {
    gameRun();
    playMusic();
}

//controller
function moveCar() {
    document.addEventListener('keydown', function (event) {
        var car = document.getElementById('raod');
        var left = car.offsetLeft;
        var top = car.offsetTop;

        switch (event.key) {
            case "ArrowUp": // Pil opp
                car.style.top = Math.max(top - 10, 0) + 'px';
                break;
            case "ArrowDown": // Pil ned
                car.style.top = Math.min(top + 10, road.offsetHeight - car.offsetHeight) + 'px';
                break;
            case "ArrowLeft": // Pil venstre
                car.style.left = Math.max(left - 10, 0) + 'px';
                break;
            case "ArrowRight": // Pil høyre
                car.style.left = Math.min(left + 10, road.offsetWidth - car.offsetWidth) + 'px';
                break;
        }
    });
}


function playMusic() {
    music = new Audio("audio/song.mp3");
    music.play();
    music.volume = 0.3;
}


function pauseMusic() {
    music.pause();
}

function resumeMusic() {
    music.play();
}

