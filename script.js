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

let a =2;
let b = 3;

alert(Number(a) + Number(b));

let monthsNumber = 13; 
if (monthsNumber < 1 || monthsNumber > 12) {
    console.log('Некорректный номер месяца');
} else {
    switch (monthsNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
    
        default:
            console.log('Неккоректный номер месяца');
    }
}

//Дополнительные задания // 

let input = prompt('Пожалуйста, введите любое число');
let number = Number(input);

if (isNaN(number)) {
    alert('Введено не число');
} else {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}

let clientsOS = 0;

switch (clientsOS) {
    case 0:
        console.log('Установите версию приложения для iOS по ссылке');
        break;
        case 1:
            console.log('Установите версию приложения для Android по ссылке');
            break;
    default:
        console.log('Некорректное значение для clientOS');
}

let clientDeviceYear = prompt('Введите год производства телефона:');
clientDeviceYear = Number(clientDeviceYear);

let message;

if (isNaN(clientDeviceYear)) {
    message = 'Некорректный год производства';
}
else if (clientDeviceYear < 2015) {
    switch (clientsOS) {
        case 0:
        message = 'Установите облегченную версию приложения для iOS по ссылке';
            break;
            case 1:
            message = 'Установите облегченную версию приложения для Android по ссылке';
                break;
        default:
            message = 'Некорректное значение для clientOS';
    }
} else {
    switch (clientsOS) {
        case 0:
            message = 'Установите версию приложения для iOS по ссылке';
            break;
        case 1:
            message = 'Установите версию приложения для Android по ссылке';
            break;
        default:
            message = 'Некорректное значение для clientOS';
    }
}

alert(message);