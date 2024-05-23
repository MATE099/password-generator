let bodyColor = document.getElementsByTagName("body")[0];
let password = document.getElementsByClassName("input-pass")[0];
let copy = document.getElementsByClassName("copy")[0];
let slider = document.getElementsByClassName("character-liner")[0];
let lengthValue = document.getElementsByClassName("length-value")[0];
let check = Array.from(document.getElementsByClassName("check"));
let checkUpperCase = document.getElementById("check-uppercase");
let checkLowerCase = document.getElementById("check-lowercase");
let checkNumbercase = document.getElementById("check-number");
let checkSymbolcase = document.getElementById("check-symbol");
let strenghtResult = document.getElementsByClassName("strenght-result")[0];
let generate = document.getElementsByClassName("generate")[0];

max = slider.max;

slider.addEventListener("input", () => {
  lengthValue.innerText = slider.value;
  slider.style.background = `linear-gradient(to right, #a4ffaf ${
    (slider.value / max) * 100
  }%, #18171f ${(slider.value / max) * 100}% 100%)`;
  generated();
});

let checkCount = 0;
let uppercase = 0;
let lowercase = 0;
let numbers = 0;
let symbols = 0;

checkUpperCase.addEventListener("click", () => {
  if (uppercase == 0) {
    uppercase = 1;
    checkCount += 1;
  } else {
    uppercase = 0;
    checkCount -= 1;
  }
  generated();
});

checkLowerCase.addEventListener("click", () => {
  if (lowercase == 0) {
    lowercase = 1;
    checkCount += 1;
  } else {
    lowercase = 0;
    checkCount -= 1;
  }
  generated();
});

checkNumbercase.addEventListener("click", () => {
  if (numbers == 0) {
    numbers = 1;
    checkCount += 1;
  } else {
    numbers = 0;
    checkCount -= 1;
  }
  generated();
});

checkSymbolcase.addEventListener("click", () => {
  if (symbols == 0) {
    symbols = 1;
    checkCount += 1;
  } else {
    symbols = 0;
    checkCount -= 1;
  }
  generated();
});

function generated() {
  check.forEach(() => {});
  if (checkCount == 1) {
    strenghtResult.style.display = "block";
    strenghtResult.innerText = "TOO WEAK!";
    bodyColor.classList.add("tooWeak");
    bodyColor.classList.remove("weak", "medium", "strong");
  } else {
    if (checkCount == 2) {
      strenghtResult.style.display = "block";
      strenghtResult.innerText = "WEAK!";
      bodyColor.classList.add("weak");
      bodyColor.classList.remove("tooWeak", "medium", "strong");
    } else {
      if (checkCount == 3) {
        strenghtResult.style.display = "block";
        strenghtResult.innerText = "MEDIUM";
        bodyColor.classList.add("medium");
        bodyColor.classList.remove("weak", "tooWeak", "strong");
      } else {
        if (checkCount == 4) {
          strenghtResult.style.display = "block";
          strenghtResult.innerText = "STRONG";
          bodyColor.classList.add("strong");
          bodyColor.classList.remove("weak", "tooWeak", "medium");
        } else {
          bodyColor.classList.remove("weak", "tooWeak", "medium", "strong");
        }
      }
    }
  }
}

let character = "";
let result = "";
function random(length) {
  let character = "";

  if (uppercase == 1) {
    character += upperCaseSymbols;
  } else {
    if (uppercase == 0 && character.includes(upperCaseSymbols)) {
      character -= upperCaseSymbols;
    }
  }

  if (lowercase == 1) {
    character += lowerCaseSymbols;
  } else {
    if (lowercase == 0 && character.includes(lowerCaseSymbols)) {
      character -= lowerCaseSymbols;
    }
  }

  if (numbers == 1) {
    character += numberSymbols;
  } else {
    if (numbers == 0 && character.includes(numberSymbols)) {
      character -= numberSymbols;
    }
  }

  if (symbols == 1) {
    character += symbolSymbols;
  } else {
    if (symbols == 0 && character.includes(symbolSymbols)) {
      character -= symbolSymbols;
    }
  }

  result = "";
  let characterlength = character.length;
  if (result == "") {
    for (i = 1; i <= length; i++) {
      result += character.charAt(Math.floor(Math.random() * characterlength));
    }
  }
}

generate.addEventListener("click", () => {
  if (checkCount > 0) {
    random(slider.value);
    password.value = result;
  } else password.value = "";
});

upperCaseSymbols = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
lowerCaseSymbols = `abcdefghijklmnopqrstuvwxyz`;
numberSymbols = `0123456789`;
symbolSymbols = `~!@#$%^&*()_-+={[}]|\:;"'<,>.?/`;

copy.addEventListener("click", () => {
  // password.select()
  navigator.clipboard.writeText(password.value);
});
