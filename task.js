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