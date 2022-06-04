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
let hak = 5;
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
const leftChances = document.querySelector(".left-chance");
const guessleft = leftChances.firstElementChild.textContent;
const guessPlace = leftChances.lastElementChild.textContent;

checkBtn.addEventListener("click", function () {
  console.log("object");
});

inputBtn.addEventListener("click", function () {
  console.log("inputa tıkladınn");
});
