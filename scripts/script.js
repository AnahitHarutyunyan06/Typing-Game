let playButtonEl = document.getElementById("playButton");
let centerEl = document.getElementById("center");
let chooseEl = document.getElementById("choose");
let tryFingersEl = document.getElementById("tryFingers");
let startCountEl = document.getElementById("start-count");
let countDownEl = document.getElementById("count-down");
let figureJumpingEl = document.getElementById("figure-jumping");
let keyboardEl = document.getElementById("keyboard");
let gameEl = document.getElementById("game");
let startEl = document.getElementById("start");
let timeEl = document.getElementById("time");
let gameOverEl = document.getElementById("gameOver");
let gameOverDivEl = document.getElementById("gameOverDiv");
let highScore = document.getElementById("highScore");
let inputBox = document.getElementById("inputBox");
let yourScore = document.getElementById("yourScore");
let menuEl = document.getElementById("menu");
let finalScore = document.getElementById("final-score");
let information = document.getElementById("information");
let informationPart = document.getElementById("informationPart")
let back = document.getElementById("backEl")
let menu = document.getElementById("menuEl")

//start game
playButtonEl.addEventListener("click", startGame);
menuEl.addEventListener("click", startGame);

function startGame() {
  centerEl.style.display = "none";
  chooseEl.style.display = "block";
  gameOverDivEl.style.display = "none";
}

//try fingers
function countDown() {
  startCountEl.innerHTML = 3
  let myInterval = setInterval(function () {
    if (startCountEl.innerHTML <= 0) {
      clearInterval(myInterval);
      countDownEl.style.display = "none";
      gameEl.style.display = "block";
      generalGame();
    } else {
      startCountEl.innerHTML = startCountEl.innerHTML - 1;
    }
  }, 1000);
}

tryFingersEl.addEventListener("click", tryFingersGame);

function tryFingersGame() {
  let falseEl;
  chooseEl.style.display = "none";
  figureJumpingEl.style.display = "none";
  keyboardEl.style.display = "block";

let oneLetter = randomLetter();
console.log(oneLetter);
let letterEl = document.getElementById(oneLetter)
console.log(letterEl);
letterEl.classList.add("selected")

document.addEventListener("keyup", function(e){
  console.log(e);
  if(falseEl){
     setTimeout(()=>falseEl.classList.remove("hit"),100)
  }
  
 if(e.code == oneLetter){
  letterEl.classList.remove("selected")
  oneLetter = randomLetter();
  letterEl = document.getElementById(oneLetter)
  console.log(letterEl);
   letterEl.classList.add("selected")
 }else{
  falseEl = document.getElementById(e.code)
  falseEl.classList.add("hit")
}
})
console.log(letterEl)
}

function randomLetter(){
  let index = Math.floor(Math.random() * letter.length);
  return letter[index]
}

//game

startEl.addEventListener("click", startPlay);

function startPlay() {
  chooseEl.style.display = "none";
  figureJumpingEl.style.display = "none";
  countDownEl.style.display = "block";
  countDown();
}

function generalGame() {
  let score = 0;
  let time = 5;
  let hScore = localStorage.score;
  let oneWord;

  timeEl.innerHTML = time
  let timeInterval = setInterval(function () {
    if (time <= 0) {
      clearInterval(timeInterval);
      gameOverF();
      gameEl.style.display = "none";
      gameOverDivEl.style.display = "block";
    } else {
        time--;
      timeEl.innerHTML = time;
    }
  }, 1000);

  if (!localStorage.score) {
    localStorage.score = 0;
    highScore.innerHTML = localStorage.score;
  } else {
    highScore.innerHTML = localStorage.score;
  }
  word.innerHTML = randomWord();

  oneWord = randomWord();
  word.innerHTML = oneWord;

  inputBox.onchange = function () {
    if (inputBox.value == oneWord) {
      score++;
      yourScore.innerHTML = score;
      if (hScore < score) {
        localStorage.score = score;
        highScore.innerHTML = localStorage.score;
      }
      time += 5;
      timeEl.innerHTML = time;
      inputBox.value = "";
      oneWord = randomWord();
      word.innerHTML = oneWord;
    } else {
      time -= 2;
      if(time>=0)
       timeEl.innerHTML = time;
      inputBox.value = "";
      oneWord = randomWord();
      word.innerHTML = oneWord;
    }
  };
}

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}


//menu


function gameOverF(){
  finalScore.innerHTML = yourScore.innerHTML;
  gameOverDivEl.style.display = "block";
  //chooseEl.style.display = "block";
}



information.addEventListener("click", informationPartF);
 
function informationPartF(){
  chooseEl.style.display = "none";
  informationPart.style.display = "block";
 }

 back.addEventListener("click",backF);
 console.log(back)
function backF(){ 
  console.log("fgh");
  informationPart.style.display = "none";
  chooseEl.style.display = "block";
}

menu.addEventListener("click",menuF);
function menuF(){
  startCountEl.style.display="none";
  menuEl.style.display= "block";

}