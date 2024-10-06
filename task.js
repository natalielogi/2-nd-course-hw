// Задание 1

let str = 'js';
console.log(str.toUpperCase());

// Задание 2

function lookForMassive(arr, str) {
    const searchString = str.toLowerCase();

    return arr.filter(item => item.toLowerCase().startsWith(searchString));
}

const words = ['Apple', 'banana', 'Avocado', 'apricot', 'Blueberry'];
const search = 'a';
const result = lookForMassive(words, search);
console.log(result);

// Задание 3

let num = Math.floor(32.58884);
console.log(num);

let num2 = Math.ceil(32.58884);
console.log(num2); 

let num3 = Math.round(32.58884);
console.log(num3);

// Задание 4

const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

console.log("Минимальное значение:", minValue);
console.log("Максимальное значение:", maxValue);

// Задание 5

function getNumber() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}
getNumber();


// Задание 6

function generateRandomArray(n) {
    const arrayLength = Math.floor(n / 2);
    const randomArray = [];

    for (let i = 0; i < arrayLength; i++) {
        const random = Math.floor(Math.random() * (n + 1));
        randomArray.push(random);  
    }
    return randomArray;
}

const n = 10;
const randomResult = generateRandomArray(n); 
console.log(randomResult); 

// Задание 7

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(5, 15));

// Задание 8

let currentDate = new Date();
console.log(currentDate);

// Задание 9

currentDate.setDate(currentDate.getDate() + 73); 
console.log(currentDate.toDateString());

// Задание 10

function formatDate(date) {
    
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 
        'июня', 'июля', 'августа', 'сентября', 'октября', 
        'ноября', 'декабря'
    ];

    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда', 
        'четверг', 'пятница', 'суббота'
    ];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата ${day} ${month} ${year} - это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

const originalCurrentDate = new Date();

console.log(formatDate(originalCurrentDate));  