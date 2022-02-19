document.querySelector('.fa-bars').addEventListener('click', function () {
  document.querySelector("ul").classList.add('ochil');
  document.querySelector("ul").classList.remove('berkil');
});

document.querySelector('.fa-close').addEventListener('click', function () {
  document.querySelector("ul").classList.remove('ochil');
  document.querySelector("ul").classList.add('berkil');
});

function imagesBlock(img) {
  document.getElementById("rasm").src = img;
}

document.querySelector('fa-bars').addEventListener('click', function (){
document.querySelector("ul").classList.add(open);
document.querySelector("ul").classList.remove(close);
});

document.querySelector('fa-close').addEventListener('click', function (){
  document.querySelector("ul").classList.remove(open);
  document.querySelector("ul").classList.add(close);
  });


//   let start = Date.now(); // запомнить время начала

// let timer = setInterval(function() {
//   // сколько времени прошло с начала анимации?
//   let timePassed = Date.now() - start;

//   if (timePassed >= 2000) {
//     clearInterval(timer); // закончить анимацию через 2 секунды
//     return;
//   }

//   // отрисовать анимацию на момент timePassed, прошедший с начала анимации
//   draw(timePassed);

// }, 20);

// // в то время как timePassed идёт от 0 до 2000
// // left изменяет значение от 0px до 400px
// function draw(timePassed) {
//   train.style.left = timePassed / 5 + 'px';
// }