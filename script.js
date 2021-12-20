document.addEventListener('keydown', function (event) {
  // за допомогою keydown програма зчитує, що написано в блоці, тому далі я створив switch
  switch (event.key) {
    case 'Баян':
      setTimeout(foo1, 1000);
      // таймер запуску функції
      break;
    case 'Фортепіано':
      setTimeout(foo2, 1000);
      // таймер запуску функції
      break;
    case 'Флейта':
      setTimeout(foo3, 1000);
      // таймер запуску функції
      break;
    case 'Барабани':
      setTimeout(foo4, 1000);
      // таймер запуску функції
      break;
    case 'Сопілка':
      setTimeout(foo5, 1000);
      // таймер запуску функції
      break;
    case 'Рояль':
      setTimeout(foo6, 1000);
      // таймер запуску функції
      break;
    case 'Гітара':
      setTimeout(foo7, 1000);
      // таймер запуску функції
      break;
  }
});
document.getElementById('play1').onclick = function () { setTimeout(foo1, 1000); };
// підтягую з html-файлу елементи по ід, присвоюю функцію із таймером
function foo1() {
  var a = new Audio('bayan.mp3');
  a.play();
}
// створив функцію, що за допомогою об'єкту аудіо запускається функція play, що відтворює небхідну музику

// далі аналогічні функції, до кожного інструмента
document.getElementById('play2').onclick = function () { setTimeout(foo2, 1000); };
function foo2() {
  var a = new Audio('fortepiano.mp3');
  a.play();
}
document.getElementById('play3').onclick = function () { setTimeout(foo3, 1000); };
function foo3() {
  var a = new Audio('flute.mp3');
  a.play();
}
document.getElementById('play4').onclick = function () { setTimeout(foo4, 1000); };
function foo4() {
  var a = new Audio('baraban.mp3');
  a.play();
}
document.getElementById('play5').onclick = function () { setTimeout(foo5, 1000); };
function foo5() {
  var a = new Audio('sopilka.mp3');
  a.play();
}
document.getElementById('play6').onclick = function () { setTimeout(foo6, 1000); };
function foo6() {
  var a = new Audio('royal.mp3');
  a.play();
}
document.getElementById('play7').onclick = function () { setTimeout(foo7, 1000); };
function foo7() {
  var a = new Audio('gitara.mp3');
  a.play();
}