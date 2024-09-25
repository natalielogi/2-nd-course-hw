// Задание 1 

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] == 0) break;
    console.log(numbs[i]);
}

// Задание 2 

const numbs2 = [1, 5, 4, 10, 0, 3];
console.log(numbs2.indexOf(4));

// Задание 3

const numbs3 = [1, 3, 5, 10, 20];
let space = numbs3.join(' ');
console.log(space);

// Задание 4

let array = [];

for (let a = 0; a < 3; a++) {
    let innerArray = [];
    for (let j = 0; j < 3; j++) {
        innerArray.push(1);
    }
    array.push(innerArray);
}
console.log(array);

// Задание 5

const numbs4 = [1, 1, 1];
numbs4.push(2, 2, 2);
console.log(numbs4); 

// Задание 6

const numbs5 = [9, 8, 7, 'a', 6, 5];
const filteredNumbs = numbs5.filter(item => typeof item === 'number'); 
filteredNumbs.sort((a, b) => a - b); 

console.log(filteredNumbs); 

// Задание 7 

const numbs6 = [9, 8, 7, 6, 5];

let userGuess = prompt('Угадай число!');

if (numbs6.includes(Number(userGuess))) {
    alert('Угадал!');
} else {
    alert('Не угадал.')
}

// Задание 8 

let str = 'abcdef';

let reversedStr = str.split('').reverse().join('');

console.log(reversedStr);

// Задание 9

const numbs7 = [[1, 2, 3], [4, 5, 6]];

let flattenedNumbs = [...numbs7[0], ...numbs7[1]];

console.log(flattenedNumbs);

// Задание 10

const numbs8 = [3, 7, 2, 5, 10, 1, 6, 4, 9, 8];

for (let d = 0; d < numbs8.length - 1; d++) {
    let sum = numbs8[d] + numbs8[d + 1];
    console.log(`Сумма ${numbs8[d]} и ${numbs8[d + 1]} = ${sum}`);
}

// Задание 11

function squareNumbers(numbs9) {
    return numbs9.map(num => num ** 2); 
}

const input = [1, 2, 3, 4, 5];
const squared = squareNumbers(input);
console.log(squared); 

// Задание 12

function getStringLengths(strings) {
    return strings.map(str => str.length); 
}

const inputArray = ["apple", "banana", "cherry", "date"];
const lengthsArray = getStringLengths(inputArray);
console.log(lengthsArray); 

// Задание 13

function getNegativeNumbers(numbs10) {
    return numbs10.filter(num => num < 0); 
}

const NegativeNumbs = [1, -2, 3, -4, 5, -6];
const negative = getNegativeNumbers(NegativeNumbs);
console.log(negative); 

// Задание 14

function generateRandomArray(size, min, max) {
    const randomArray = [];
    for (let e = 0; e < size; e++) {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomValue);
    }
    return randomArray;
}

const originalArray = generateRandomArray(10, 0, 10);

const evenNumbers = originalArray.filter(num => num % 2 === 0);

console.log("Исходный массив:", originalArray);
console.log("Массив с четными значениями:", evenNumbers);