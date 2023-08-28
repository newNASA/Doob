let langs = document.querySelector('.langs');
let lang = document.querySelector('.lang');
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
