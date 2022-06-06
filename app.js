// ? Variables
const inputBtnn = document.querySelector("#input");
const checkBtn = document.querySelector("#check");
const leftChances = document.querySelector(".left-chance");
const guessleft = leftChances.lastElementChild;
const guessPlace = leftChances.firstElementChild;
const numberGap = document.querySelector(".content").lastElementChild;
const tryagain = document.querySelector("#try-again");
const playagain = document.querySelector("#play-again");

let rastgeleSayi = Math.floor(Math.random() * 100 + 1);
console.log(rastgeleSayi);
let hak = 4;

window.onload = () => {
  // javascriptKontrol();
  inputBtnn.focus();
};

// window.addEventListener("load", () => { });

inputBtnn.addEventListener(`keydown`, (e) => {
  console.log(e);
  if (e.code === "Enter") {
    checkBtn.click();
    e.preventDefault();
  }
  if (e.keyCode === 13) {
    checkBtn.click();
    e.preventDefault();
  }
});

checkBtn.addEventListener("click", function (e) {
  console.log(hak);
  // console.log(rastgeleSayi);
  game();
  inputBtnn.value = "";
  e.preventDefault();
});
function game() {
  let inputBtn = inputBtnn.value;
  let aralıkSayıTaban = Math.floor(rastgeleSayi / 10) * 10 - 10;
  // *==================Aralık Sayı Tavan====================
  let aralıkSayıTavan = aralıkSayıTaban + 20;
  if (inputBtn == rastgeleSayi) {
    hak -= 1;
    console.log(hak);
    numberGap.textContent = `Congratulations you guessed in ${4 - hak}  🥳`;
    leftChances.style.display = "none";
    playagain.style.display = "inline-block";
    checkBtn.style.display = "none";
    inputBtnn.style.display = "none";
  } else if (inputBtn > 100 || inputBtn < 0 || inputBtn == "") {
    numberGap.textContent = `Please enter a valid  number`;
    guessPlace.textContent = "";
  } else {
    leftChances.style.display = "block";
    if (hak == 0) {
      numberGap.textContent = `Game Over`;
      leftChances.style.display = "none";
      tryagain.style.display = "inline-block";
      makeDisPlay();
      checkBtn.style.display = "none";
      inputBtnn.style.display = "none";
    } else if (inputBtn < rastgeleSayi) {
      hak -= 1;
      guessLeft();
      guessPlace.textContent = `YOU GUESSED TOO LOW !`;
      if (rastgeleSayi < 20) {
        numberGap.textContent = `Please enter a number between 0 - 20`;
      } else if (rastgeleSayi < 80) {
        numberGap.textContent = `Please enter a number between ${aralıkSayıTaban}- ${aralıkSayıTavan}`;
      } else {
        numberGap.textContent = `Please enter a number between ${aralıkSayıTaban}- 100`;
      }
    } else if (inputBtn > rastgeleSayi) {
      hak -= 1;
      guessLeft();
      guessPlace.textContent = `YOU GUESSED TOO HIGH !`;
      if (rastgeleSayi < 20) {
        numberGap.textContent = `Please enter a number between 0 - 20`;
      } else if (rastgeleSayi < 80) {
        numberGap.textContent = `Please enter a number between ${aralıkSayıTaban}- ${aralıkSayıTavan}`;
      } else {
        numberGap.textContent = `Please enter a number between ${aralıkSayıTaban}- 100`;
      }
    } else {
      numberGap.textContent = `Wrong Input`;
    }
  }
}

tryagain.addEventListener("click", function (e) {
  inputBtnn.value = "";
  guessleft.textContent = `You have 5 chance`;
  guessPlace.textContent = "Be more careful this time !";
  numberGap.textContent = "Please enter a number between 1-100";
  hak = 4;
  makeDisTry();
  leftChances.style.display = "";
  rastgeleSayi = Math.floor(Math.random() * 100 + 1);
  console.log(rastgeleSayi);
  checkBtn.style.display = "";
  inputBtnn.style.display = "";
  e.preventDefault;
});

playagain.addEventListener("click", function (e) {
  inputBtnn.value = "";
  guessleft.textContent = `You have 5 chance`;
  guessPlace.textContent = "";
  numberGap.textContent = "Please enter a number between 1-100";
  rastgeleSayi = Math.floor(Math.random() * 100 + 1);
  console.log(rastgeleSayi);
  hak = 4;
  makeDisPlay();
  leftChances.style.display = "";
  checkBtn.style.display = "";
  inputBtnn.style.display = "";
  e.preventDefault;
});

function guessLeft() {
  guessleft.textContent = `You have ${hak + 1} guess left`;
}

function makeDisPlay() {
  playagain.style.display = "none";
}

function makeDisTry() {
  tryagain.style.display = "none";
}
