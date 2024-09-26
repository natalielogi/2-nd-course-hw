let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guess() {
    let userGuess;
    attempts = 0;
    
    while (userGuess !== randomNumber) {
        userGuess = prompt('Угадайте число от 1 до 100:');

        if (userGuess === null) {
            alert('Игра отменена.');
            return; 
        }

        userGuess = parseInt(userGuess);
        attempts++;
        
        if (isNaN(userGuess)) {
            alert('Пожалуйста, введите корректное число!');
        } else if (userGuess < randomNumber) {
            alert('Загаданное число больше!');
        } else if (userGuess > randomNumber) {
            alert('Загаданное число меньше!');
        } else {
            alert(`Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток.`);
            break; 
        }
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
}

function maths() {
    let num1 = getRandomNumber();
    let num2 = getRandomNumber();
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let correctAnswer; 

    switch (operation) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        case '*':
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = num1;
            num1 = num1 * num2;
            break;
    }

    let userAnswer = prompt(`${num1} ${operation} ${num2} = ?`)

    if (userAnswer === null) {
        alert('Игра оконена.');
        return;
    }

    userAnswer = parseFloat(userAnswer);

    if (isNaN(userAnswer)) {
        alert('Пожалуйста, введите корректное число!');
    } else if (userAnswer === correctAnswer) {
        alert('Правильно!');
    } else {
        alert(`Неправильно. Правильный ответ ${correctAnswer}`);
    }
}