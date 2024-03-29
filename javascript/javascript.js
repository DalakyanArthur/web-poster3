//Перемещение объектов
$(document).ready(function() {   
  $('.ball1, .ball2, .ball3').draggable();
  $('.block5').droppable();

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  } 
});


// //Анимация появления текста по скроллу
// const txt = document.querySelector("#txt");

// window.addEventListener('scroll', e => {
//   if (pageYOffset >= 220) {
//       txt.classList.add("op");
//    } else {
//      txt.classList.remove("op");
//      }
// });

//Заполнения текста по скроллу
// const HIGHLIGHT = 'class="highlight"';
// const TEXT = "Filiver is an innovative food delivery service using unique fishbot technology. This service provides fast, environmentally friendly and safe delivery of goods along water routes."
// let words = TEXT.split(" ");
// let text = document.querySelector('.text');
// text.innerHTML = words
//   .map(w => `<span>${w}</span>`)
//   .join(' ');

// window.addEventListener('scroll', () => {
//   let scroll = getScrollFraction();
//   let words_highlighted = scroll * words.length;
  
//   text.innerHTML = words
//   .map((w, i) => `<span ${i < words_highlighted ? HIGHLIGHT : ''}>${w}</span>`)
//   .join(' ');
// })

// function getScrollFraction() {
//     var h = document.documentElement, 
//         b = document.body,
//         st = 'scrollTop',
//         sh = 'scrollHeight';
//     return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
// }