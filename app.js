// ? Variables
// const inputBtn = document.querySelector("#input");
const checkBtn = document.querySelector("#check");
const leftChances = document.querySelector(".left-chance");
const guessleft = leftChances.firstElementChild;
const guessPlace = leftChances.lastElementChild;
const numberGap = document.querySelector(".content").lastElementChild;
const tryagain = document.querySelector("#try-again");
const playagain = document.querySelector("#play-again");

// const rastgeleSayi = Math.floor(Math.random() * 100 + 1);
// const rastgeleSayi = 79;
const rastgeleSayi = Math.floor(Math.random() * 100 + 1);
console.log(rastgeleSayi);
// *=================Aralık Sayı Taban==========================
// let aralıkSayı = 100 - rastgeleSayi;
// aralık sayıyı en yakın alt 10'lar basamağına yuvarlamak için ⬇️
let aralıkSayıTaban = Math.floor(rastgeleSayi / 10) * 10 - 10;
// *==================Aralık Sayı Tavan====================
let aralıkSayıTavan = aralıkSayıTaban + 20;
// random sayının hemen bulunmaması için ekstra bir -10 yaptım
// !________________________________________________________________________
// let hak = 5;

if (aralıkSayıTaban < 0) {
  aralıkSayıTaban = 0;
}

// window.addEventListener("load", () => { });

function block() {
  leftChances.style.display = "block";
}
// block();
// e.preventDefault();
let hak = 5;
checkBtn.addEventListener("click", function (e) {
  let inputBtn = document.getElementById("input").value;

  leftChances.style.display = "block";
  // do {
  console.log(hak);
  if (hak > 0) {
    if (inputBtn == rastgeleSayi) {
      hak -= 1;
      console.log(hak);
      numberGap.textContent = `Tebrikler ${5 - hak} denemede bildiniz. 🥳`;
      leftChances.style.display = "none";
      playagain.style.display = "inline-block";
      // e.target.removeEventListener("click",   ,false);
    } else if (inputBtn < rastgeleSayi) {
      hak -= 1;
      guessleft.textContent = `You have ${hak} guess left`;
      guessPlace.textContent = `YOU GUESSED TOO LOW !`;
      if (rastgeleSayi < 20) {
        // console.log(`0 - 20 arası bir sayı giriniz`);
        numberGap.textContent = `0 - 20 arası bir sayı giriniz`;
      } else if (rastgeleSayi < 80) {
        // console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
        numberGap.textContent = `${aralıkSayıTaban}- ${aralıkSayıTavan} arası bir sayı giriniz`;
      } else {
        // console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
        numberGap.textContent = `${aralıkSayıTaban}- 100 arası bir sayı giriniz`;
      }
    } else if (inputBtn > rastgeleSayi) {
      hak -= 1;
      guessleft.textContent = `You have ${hak} guess left`;
      guessPlace.textContent = `YOU GUESSED TOO HIGH !`;
      if (rastgeleSayi < 20) {
        // console.log(`0 - 20 arası bir sayı giriniz`);
        numberGap.textContent = `0 - 20 arası bir sayı giriniz`;
      } else if (rastgeleSayi < 80) {
        // console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
        numberGap.textContent = `${aralıkSayıTaban}- ${aralıkSayıTavan} arası bir sayı giriniz`;
      } else {
        // console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
        numberGap.textContent = `${aralıkSayıTaban}- 100 arası bir sayı giriniz`;
      }
    } else {
      numberGap.textContent = `wrong input`;
    }
    // } while (hak > 0);
  } else {
    numberGap.textContent = `Try Again`;
    leftChances.style.display = "none";
    tryagain.style.display = "inline-block";
    playagain.style.display = "none";
  }
  e.preventDefault();
});
