const doc = document;

const nameUser = doc.querySelector('.nameUser');
const dateUser = doc.querySelector('.dateUser');
const cityUser = doc.querySelector('.cityUser');
const educUser = doc.querySelector('.educUser');
const skillUser = doc.querySelector('.skillUser');
const qualityUser = doc.querySelector('.qualityUser');
const cashUser = doc.querySelector('.cashUser');


nameUser.innerHTML = `
    <h2>Прізвище ім\'я по-батькові:</h2>
    <h3>${prompt('Введіть Ваше прізвище, ім\'я, по-батькові:')}.</h3>
    `;

dateUser.innerHTML = `
    <h2>Дата народження:</h2>
    <h3>${prompt('Введіть Вашу дату народження:')}.</h3>
    `;

cityUser.innerHTML = `
    <h2>Місце проживання:</h2>
    <h3>${prompt('Введіть Ваше місце проживання:')}.</h3>
    `;

educUser.innerHTML = `
    <h2>Здобута освіта:</h2>
    <h3>${prompt('Введіть Ваш рівень освіти:')}.</h3>
    `;

skillUser.innerHTML = `
    <h2>Досвід роботи:</h2>
    <h3>${prompt('Введіть Ваш досвід та останнє місце роботи:')}.</h3>
    `;

qualityUser.innerHTML = `
    <h2>Особисті якості:</h2>
    <h3>${prompt('Введіть Ваші особисті якості:')}.</h3>
    `;

cashUser.innerHTML = `
    <h2>Бажаний рівень ЗП:</h2>
    <h3>${prompt('Введіть Ваш бажаний рівень ЗП:')}.</h3>
    `;