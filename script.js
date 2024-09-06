let password = 'пароль';
let userInput = prompt('Введите пароль');
if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
}

let c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 200;
let e = 2;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}