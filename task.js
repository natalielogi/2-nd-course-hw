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
        console.log('Число четное')
    } else {
        console.log('Число нечетное')
    }
}

number();