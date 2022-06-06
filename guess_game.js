const rastgeleSayi = Math.floor(Math.random() * 100 + 1);
// const rastgeleSayi = 79;
console.log(rastgeleSayi);
// ?=================Aralık Sayı Taban==========================
let aralıkSayı = 100 - rastgeleSayi;
// aralık sayıyı en yakın alt 10'lar basamağına yuvarlamak için ⬇️
aralıkSayı = Math.floor(rastgeleSayi / 10) * 10 - 10;
// ?==================Aralık Sayı Tavan====================
let aralıkSayıTavan = aralıkSayı + 20;
// random sayının hemen bulunmaması için ekstra bir -10 yaptım
// !________________________________________________________________________
// let hak = 5;
/* do {
  const tahmin = Number(prompt("Lütfen 0-100 arası bir sayı giriniz:"));
  if (tahmin != rastgeleSayi) {
    hak -= 1;
    console.log(`Dikkat ${hak} hakkınız kaldı`);
    // !=========================================================
    if (tahmin < rastgeleSayi) {
      console.log("Arttır ⬆️");
      if (rastgeleSayi < 20) {
        console.log(`0 - 20 arası bir sayı giriniz`);
      } else if (rastgeleSayi < 80) {
        console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
      } else {
        console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
      }
    }
    // !=========================================================
    else {
      console.log("Azalt ⬇️");
      if (rastgeleSayi < 20) {
        console.log(`0 - 20 arası bir sayı giriniz`);
      } else if (rastgeleSayi < 80) {
        console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
      } else {
        console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
      }
    }
  } else {
    // ? kazanma ihtimali
    console.log(`Tebrikler ${6 - hak} denemede bildiniz. 🥳`);
    break;
  }
  if (hak === 0) {
    console.log("Üzgünüz oyunu kaybettiniz 😿");
    console.log("Yine bekleriz");
  }
} while (hak > 0); */

const inputBtn = document.querySelector("#input");
const checkBtn = document.querySelector("#check");
const numberGap = document.querySelector(".content").lastElementChild;
const leftChances = document.querySelector(".left-chance");
const guessleft = leftChances.firstElementChild;
const guessPlace = leftChances.lastElementChild;

checkBtn.addEventListener("click", function () {
  console.log("object");
});

inputBtn.addEventListener("click", function () {
  console.log("inputa tıkladınn");
});

let hak = 5;

checkBtn.addEventListener("click", function (e) {
  console.log("object");
  game();
  block();
  e.preventDefault();
});

inputBtn.addEventListener("onclick", function () {
  console.log("inputa tıkladınn");
});

function block() {
  leftChances.style.display = "block";
}

function game() {
  let guess = document.querySelector("#input").value;
  if (hak > 0) {
    if (guess !== rastgeleSayi) {
      hak -= 1;
      if (guess < rastgeleSayi) {
        // console.log("up ⬆️");
        guessPlace.textContent = `YOUR GUESS IS TOO LOW !`;
        if (rastgeleSayi < 20) {
          // console.log(`0 - 20 arası bir sayı giriniz`);
          numberGap.textContent = `0 - 20 arası bir sayı giriniz`;
        } else if (rastgeleSayi < 80) {
          // console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
          numberGap.textContent = `${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`;
        } else {
          // console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
          numberGap.textContent = `${aralıkSayı}- 100 arası bir sayı giriniz`;
        }
      } else {
        guessleft.value = `You have ${5 - hak} guess left`;

        if (rastgeleSayi < 20) {
          // console.log(`0 - 20 arası bir sayı giriniz`);
          numberGap.textContent = `0 - 20 arası bir sayı giriniz`;
        } else if (rastgeleSayi < 80) {
          // console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
          numberGap.textContent = `${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`;
        } else {
          // console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
          numberGap.textContent = `${aralıkSayı}- 100 arası bir sayı giriniz`;
        }
      }
    } else {
      leftChances.innerHTML = `<h1>Tebrikler ${
        6 - hak
      } denemede bildiniz. 🥳</h1>`;
    }
  } else {
    // console.log("Üzgünüz oyunu kaybettiniz 😿");
    guessleft.textContent = `Üzgünüz oyunu kaybettiniz 😿`;
    // console.log("Yine bekleriz");
    guessPlace.textContent = `asdfgg`;
  }
}

// ! ===========
function oyun() {
  // do {
  const tahmin = inputBtn.textContent;
  if (tahmin != rastgeleSayi) {
    hak -= 1;
    // console.log(`Dikkat ${hak} hakkınız kaldı`);
    guessleft.value = `You have ${hak} guess left`;
    // !=========================================================
    if (tahmin < rastgeleSayi) {
      // console.log("up ⬆️");
      guessPlace.textContent = `YOUR GUESS IS TOO LOW !`;
      if (rastgeleSayi < 20) {
        // console.log(`0 - 20 arası bir sayı giriniz`);
        numberGap.textContent = `0 - 20 arası bir sayı giriniz`;
      } else if (rastgeleSayi < 80) {
        // console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
        numberGap.textContent = `${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`;
      } else {
        // console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
        numberGap.textContent = `${aralıkSayı}- 100 arası bir sayı giriniz`;
      }
    }
    // !=========================================================
    else {
      guessleft.textContent = "Azalt ⬇️";
      if (rastgeleSayi < 20) {
        // console.log(`0 - 20 arası bir sayı giriniz`);
        numberGap.textContent = `0 - 20 arası bir sayı giriniz`;
      } else if (rastgeleSayi < 80) {
        // console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
        numberGap.textContent = `${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`;
      } else {
        // console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
        numberGap.textContent = `${aralıkSayı}- 100 arası bir sayı giriniz`;
      }
    }
  } else {
    // ? kazanma ihtimali
    console.log(`Tebrikler ${6 - hak} denemede bildiniz. 🥳`);
    leftChances.innerHTML = `<h1>Tebrikler ${
      6 - hak
    } denemede bildiniz. 🥳</h1>`;
    // break;
  }
  if (hak === 0) {
    // console.log("Üzgünüz oyunu kaybettiniz 😿");
    guessleft.textContent = `Üzgünüz oyunu kaybettiniz 😿`;
    // console.log("Yine bekleriz");
    guessPlace.textContent = `asdfgg`;
  }
  // } while (hak > 0);
}

// function game() {
//   let guess = document.querySelector("#input").value;
//   let hak = 5;
//   let aralıkSayı = 100 - rastgeleSayi;
//   aralıkSayı = Math.floor(rastgeleSayi / 10) * 10 - 10;

//   let aralıkSayıTavan = aralıkSayı + 20;
//   if (hak > 0) {
//     if (guess < rastgeleSayi) {
//       hak--;
//       guessPlace.textContent = `YOUR GUESS IS TOO LOW !`;
//       guessleft.textContent = `You have ${hak} guess left`;

//       if (rastgeleSayi < 20) {
//         console.log(`0 - 20 arası bir sayı giriniz`);
//         numberGap.textContent = `0 - 20 arası bir sayı giriniz`;
//       } else if (rastgeleSayi < 80) {
//         console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
//         numberGap.textContent = `${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`;
//       } else {
//         console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
//         numberGap.textContent = `${aralıkSayı}- 100 arası bir sayı giriniz`;
//       }
//     } else if (guess > rastgeleSayi) {
//       hak--;
//       guessPlace.textContent = `YOUR GUESS IS TOO HIGH !`;
//       guessleft.value = `You have ${6 - hak} guess left`;

//       if (rastgeleSayi < 20) {
//         console.log(`0 - 20 arası bir sayı giriniz`);
//         numberGap.textContent = `0 - 20 arası bir sayı giriniz`;
//       } else if (rastgeleSayi < 80) {
//         console.log(`${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`);
//         numberGap.textContent = `${aralıkSayı}- ${aralıkSayıTavan} arası bir sayı giriniz`;
//       } else {
//         console.log(`${aralıkSayı}- 100 arası bir sayı giriniz`);
//         numberGap.textContent = `${aralıkSayı}- 100 arası bir sayı giriniz`;
//       }
//     } else {
//       hak--;
//       leftChances.innerHTML = `<h1>Tebrikler ${
//         6 - hak
//       } denemede bildiniz. 🥳</h1>`;
//     }
//   } else if (hak == 0) {
//     guessleft.textContent = `Üzgünüz oyunu kaybettiniz 😿`;
//     console.log("Yine bekleriz");
//     guessPlace.textContent = `asdfgg`;
//   }
// }

tryagain.addEventListener("click", function (e) {
  guessPlace.textContent = "Be more careful this time !";
  makeDisTry();
  reFill();
  e.preventDefault;
});

playagain.addEventListener("click", function (e) {
  guessPlace.textContent = "";
  reFill();
  makeDisPlay();
  e.preventDefault;
});

function reFill() {
  inputBtnn.value = "";
  guessleft.textContent = `You have 5 chance`;
  numberGap.textContent = "Please enter a number between 1-100";
  checkBtn.style.display = "";
  hak = 4;
  leftChances.style.display = "";
  rastgeleSayi = Math.floor(Math.random() * 100 + 1);
  console.log(rastgeleSayi);
}

function block() {
  leftChances.style.display = "";
}

function canVer() {
  hak = 4;
}
