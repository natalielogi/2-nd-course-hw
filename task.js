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

// Задание 6 //

let userNumber = prompt('Введите цифру от 0 до 10');

function multNumber() {

    userNumber = Number(userNumber);

    if (isNaN(userNumber) || userNumber > 10 || userNumber < 0) {
        return'Переданный параметр не является числом или верным числом';
    } else {
        let cube = userNumber ** 3; 
        return`${userNumber} в кубе ровняется ${cube}`;  
    }
}

console.log(multNumber());


// Задание 7 (спасибо, я вспомнила почему я не любила геометрию в школе) // 

const cicrle1 = {
    radius: 5, 

    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },

    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

const cicrle2 = {
    radius: 10,

    getArea: function() {
        return Math.PI * Math.pow(this.radius, 2);
    },

    getPerimeter: function() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(`Circle1 - Area: ${cicrle1.getArea()}, Perimeter: ${cicrle1.getPerimeter()}`);
console.log(`Circle2 - Area: ${cicrle2.getArea()}, Perimeter: ${cicrle2.getPerimeter()}`);
