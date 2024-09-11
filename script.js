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
