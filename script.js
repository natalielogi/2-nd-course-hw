// Задание 1 //

for (let i = 0; i < 2; i++) {
    console.log('Привет!');
    
}

//Задание 2 и 3//

for (let a = 1; a <= 22; a++) {
    if (a === 6) {
        continue;
    }
    console.log(a);  
}

// Задание 4 //

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя":'400'
};

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

// Задание 5 //

let n = 1000; 
let num = 0;

while (n >= 50) {
    n = n / 2; 
    num++;
}

console.log(`Число ${n}`);
console.log(`Количество интераций ${num}`);

// Задание 6 //

let firstFriday = 4;
for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

// Доп 1 //

let k = 100; 
let iterations = 0; 

while (k >= 0) {
    k = k - 7;
    iterations++;
}

console.log(`Результат вычитания ${k}`);
console.log(`Количество итераций ${iterations}`);

// Доп 2 //

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
];    

for (let c = 0; c < months.length; c++) {
    console.log(`Месяц ${c + 1}: ${months[c]}`);
    
}

// примичание: поставила "=" вместо "<" случайно, чуть комп не потеряла :D зато поняла что такое бесконечный цикл //
