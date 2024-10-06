// Задание 1 

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort((a, b) => a.age - b.age);

console.log(people);

// Задание 2

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    return arr
        .map(item => (ruleFunction(item) ? item : null)) 
        .filter(item => item !== null); 
}

console.log(filter([3, -4, 1, 9], isPositive)); 

const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
 
 console.log(filter(people2, isMale));

 // Задание 3

 function logCurrentDate() {
    const currentDate = new Date();
    console.log(`Текущая дата и время: ${currentDate}`);
 }

 const intervalId = setInterval(logCurrentDate, 3000);

 setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
 }, 30000);

 // Задание 4

 function delayForSecond(callback) {
    setTimeout(callback, 1000);
 }

 delayForSecond(function () {
    console.log('Привет, Глеб!');
 });

 // Задание 5

 function delayForSecond2 (cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond2 (function() {
    sayHi('Глеб');
});