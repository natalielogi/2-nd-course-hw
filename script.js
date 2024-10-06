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

function text() {
    let userInput = prompt("Введите текст");

    if (!userInput) {
        alert("Пожалуйста, введите текст.");
        return;
    }

    if (/^\d+$/.test(userInput)) {
        alert("Ошибка: пожалуйста, введите текст, а не цифры.");
        return;
    }

    if (!/^[а-яё\s]+$/i.test(userInput)) {
        alert("Ошибка: пожалуйста, используйте только кириллицу.");
        return;
    }


    let reversed = userInput.split('').reverse().join('');

    alert(`Перевернутый текст: ${reversed}`);
}

function quiz() {

    const quizQuestions = [
        {
            question: "Столица Австралии?",
            options: ["Сидней", "Мелбурн", "Канберра"],
            correctAnswer: "Канберра"
        },
        {
            question: "Столица Канады?",
            options: ["Торонто", "Оттава", "Ванкувер"],
            correctAnswer: "Оттава"
        },
        {
            question: "Столица Вьетнама?",
            options: ["Ханой", "Хошимин", "Да Нанг"],
            correctAnswer: "Ханой"
        }
    ];

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    let correctAnswersCount = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];

        const shuffledOptions = shuffleArray([...currentQuestion.options]);

        let questionText = `${currentQuestion.question}\n`;

        for (let j = 0; j < shuffledOptions.length; j++) {
            questionText += `${j + 1}. ${shuffledOptions[j]}\n`;
        }

    const userAnswer = prompt(questionText + "Введите номер ответа:");

    if (userAnswer) {
        const selectedOptionIndex = parseInt(userAnswer) - 1; 
        if (selectedOptionIndex >= 0 && selectedOptionIndex < shuffledOptions.length) {
            if (shuffledOptions[selectedOptionIndex] === currentQuestion.correctAnswer) {
                correctAnswersCount++;
            }
        } else {
            alert("Ошибка: выберите правильный вариант ответа.");
        }
    }
    }
if (correctAnswersCount === quizQuestions.length) {
    alert("Вы ответили на все вопросы правильно!");
} else if (correctAnswersCount > 0) {
    alert(`Правильно ${correctAnswersCount} из ${quizQuestions.length} вопросов.`);
} else {
    alert("0 правильных ответов, попробуйте еще раз :(");
}
}

function rock () {
    
    const rockSissorsPaper = ["камень", "ножницы", "бумага"];

    let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

    if (!rockSissorsPaper.includes(userChoice)) {
        alert("Пожалуйста, выберите корректное значение: камень, ножницы или бумага.");
        return;
    }

    let computerChoice = rockSissorsPaper[Math.floor(Math.random() * rockSissorsPaper.length)];

    let result = determineWinner(userChoice, computerChoice);

    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\n${result}`);
}

function determineWinner(user, computer) {
    if (user === computer) return "Ничья!";
    
    return (user === "камень" && computer === "ножницы") ||
           (user === "ножницы" && computer === "бумага") ||
           (user === "бумага" && computer === "камень")
        ? "Вы победили!" 
        : "Вы проиграли!";
}