// 0 положить объект в переменную
// 1 создать функцию по клику
// 3 изменить цвет через innerHTML

const square = document.querySelector('.square');

square.addEventListener('click', function changeSquareColor(event) {
    // change background color
    event.target.style.backgroundColor = 'salmon';
});

const rectangle = document.querySelector('.rectangle');

rectangle.addEventListener('click', function changeRectangleColor(event) {
    event.target.style.backgroundColor = 'yellow';

    event.target.style.color = 'black';
});