const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.getElementById('score');
const timeLeft = document.getElementById('time-left');
const element = document.querySelector('.myElement');

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown',() => {
        if(square.id == hitPosition){
            result++;
            score.innerHTML=result;
            hitPosition = null;
        }

    })
})

function randomMole(){
    timerId = null;
    timerId = setInterval(randomSquare,500);
}

randomMole();

function countDown(){
    currentTime--;
    timeLeft.innerHTML=currentTime;
    if(currentTime==0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        element.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Time Up!</strong> your Result is :- ${result}
      </div>`;

        
    }
     
}


let countDownTimerId = setInterval(countDown, 1000)