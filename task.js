// Задание 1

const headingEl = document.querySelector('.heading');
const buttonEl = document.querySelector('.button');

buttonEl.addEventListener ('click', function() {
    if (headingEl.style.display === 'none') {
        headingEl.style.display = 'block';
        buttonEl.textContent = 'Скрыть'; 
    } else {
        headingEl.style.display = 'none';
        buttonEl.textContent = 'Показать';
    }
});

// Задание 2

const paragraphEl = document.querySelector('.paragraph');
const changeColorEl = document.querySelector('.change-color');

changeColorEl.addEventListener('click', function() {
    paragraphEl.style.color = 'blue';
});

// Задание 3

const changeTextEl = document.querySelector('.change-text');

changeTextEl.addEventListener('click', function() {
    headingEl.textContent = 'Привет, мир!';
});

// Задание 4

const descriprionEls = document.querySelectorAll('.description');

descriprionEls.forEach(function (element) {
    element.textContent = 'Измененный текст';
});

// Задание 5

const newDescriptionEls = document.querySelectorAll('.new-description');

newDescriptionEls.forEach(function (el) {
    el.textContent = 'Новый текст';
});

// Задание 6

const newParagraphEl = document.querySelector('.new-paragraph');

newParagraphEl.addEventListener('click', function () {
    const newParagraph = document.createElement('p');

    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

// Задание 7

const removeEl = document.querySelector('.remove');

removeEl.addEventListener('click', function () {
    const firstDescriptionEl = document.querySelector('.description');

    if (firstDescriptionEl) {
        firstDescriptionEl.remove();
    }
});