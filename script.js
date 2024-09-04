let number = prompt('Загадайте любое число');
number = Number(number);

let doubledNumber = number * 2; 
alert(`Удвоенное число: ${doubledNumber}`);

let plusTen = doubledNumber + 10;
alert(`Удвоенное число плюс 10: ${plusTen}`);

let dividedByTwo = plusTen / 2;
alert(`Результат, разделенный на 2: ${dividedByTwo}`);

let result = dividedByTwo - number;
alert(`Результат после вычитания первоначального числа: ${result}`);

alert('Ответ всегда равен 5!');