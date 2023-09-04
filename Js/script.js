
// change language div elements
let langs = document.querySelector('.langs');
let lang = document.querySelector('.lang');

// ______________________________________________________________________________________
// change language div elements js codes
let langClickedCount = 0;

function langClicked() {
      langClickedCount++;
      if (langClickedCount % 3 === 1) {
            langs.style.display = 'block';
      } else if (langClickedCount % 3 === 2) {
            langs.style.display = 'none';
      } else {
            langs.style.display = 'block';
      }
}


lang.addEventListener('click', langClicked);
// _______________________________________________________________________________
// change language p elements
let en = document.getElementById('en');
let uz = document.getElementById('uz');
let ru = document.getElementById('ru');
// ___________________________________________________________________________________________
// change language p elements js codes

// uz lang change
function swapTextContent(element1, element2) {
      var temp = element1.textContent;
      element1.textContent = element2.textContent;
      element2.textContent = temp;
}

uz.addEventListener('click', function () {
      swapTextContent(en, uz);
});

// ru lang change
function swapTextContent(element1, element2) {
      var temp = element1.textContent;
      element1.textContent = element2.textContent;
      element2.textContent = temp;
}

ru.addEventListener('click', function () {
      swapTextContent(en, ru);
});
// _____________________________________________________________________________________
// open menus div elements
let menus = document.querySelector('.menus');
let menu = document.querySelector('.menu');

// ______________________________________________________________________________________
// change language div elements js codes
let menuClickedCount = 0;

function menuClicked() {
      menuClickedCount++;
      if (menuClickedCount % 3 === 1) {
            menus.style.display = 'block';
      } else if (menuClickedCount % 3 === 2) {
            menus.style.display = 'none';
      } else {
            menus.style.display = 'block';
      }
}

menu.addEventListener('click', menuClicked)
// _____________________________________________________________________________________________
// Contact bottom elements

contactBottom = document.getElementById("contactBottom");
conformation = document.getElementsByClassName("con-conformation")[0];

// contactBottom clicked codes

let contactClickedCount = 0;

function contactClicked(){
      contactClickedCount++;
      if (contactClickedCount % 3 === 1){
            conformation.style.display = 'inline-block';
      }else if (contactClickedCount % 3 === 2){
            conformation.style.display = 'none';
      }else{
            conformation.style.display = 'inline-block';
      }
}

contactBottom.addEventListener("click", contactClicked)