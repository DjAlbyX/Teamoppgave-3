//model
const app = document.getElementById('app');
let image = 'img/Start_screen.png';
let carImg = 'img/Car.png'
let music;

let gameWidth;
let gameHeight;


let carPositionX = 180; 
let carPositionY = 180;
 

document.addEventListener('keydown', moveCar);

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
            <div class="car"></div>
        </div>
    `;
    const gameArea = document.getElementById('road');
    gameWidth = gameArea.offsetWidth;
    gameHeight = gameArea.offsetHeight; 
    car = document.querySelector('.car')
}

function CloseScreen() {
    gameRun();
    playMusic();
}

//controller
function moveCar(e) {

    if (e.key === "ArrowLeft" | e.key === 'a') {
        if (carPositionX > 0) { 
            carPositionX -= 10;
        }
    } else if (e.key === "ArrowRight" | e.key === 'd') {
        if (carPositionX < gameWidth - car.offsetWidth) { 
            carPositionX += 10; 
        }
    } else if (e.key === "ArrowUp" | e.key === 'w') {
        if (carPositionY > 0) { 
            carPositionY -= 10;
        }
    } else if (e.key === "ArrowDown" | e.key === 's') { 
        if (carPositionY < gameHeight - car.offsetHeight) { 
            carPositionY += 10;
        }
    }
    car.style.left = carPositionX + 'px';
    car.style.top = carPositionY + 'px'; 
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