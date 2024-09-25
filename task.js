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