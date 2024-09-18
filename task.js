// Задание 1// 

function minNumber(a, b) {
    return (a < b) ? a : b;
}

console.log(minNumber(8, 4));
console.log(minNumber(6, 6));

// Задание 2// 

let a = prompt('Введите число'); 

function number () {
    if (a % 2 == 0) {
        return('Число четное');
    } else {
        return('Число нечетное');
    }
}

console.log(number());

//Задание 3//

function printSquare(number) {
    console.log(number * number);
}

printSquare(5);

function getSquare(number) {
    return(number * number);
}

let result = getSquare(5);
console.log(result); 

// Задание 4 //

let userAge = prompt('Сколько вам лет?');

function userReply() {
    if (userAge < 0) {
        alert('Вы ввели некоректное число');
    } else if (userAge >= 0 && userAge <= 12) {
        alert('Привет, друг!');
    } else if (userAge >= 13) { 
        alert ('Добро пожаловать!')
    }
}

userReply(); 

// Задание 5 //

function addNumber(c, d) {

    с = Number(c);
    d = Number(d);

    if (isNaN(c) || isNaN(d) ) {
        return('Одно или оба значения не являются числом');
    } else {
        return(c * d);
    }
}

console.log(addNumber(3, 5));  
console.log(addNumber('3', '5'));
console.log(addNumber('3', 'hello'));