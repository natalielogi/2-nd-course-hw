let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function math() {
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