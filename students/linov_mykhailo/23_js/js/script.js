// Мінімум

// 1. Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;

// Написав 4 приклади в index.html


// 2. Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);

const name = "Mykhailo Linov";
const firstAndLastName = "Mykhailo Linov";
const _myName = "Mykhailo Linov";
const $Name = "Mykhailo Linov";

//let 9name;
// let myName!;
// let my name;
// let #name;


// 3. Вкажи всі можливі способи коментування коду;

// однорядковий

/* багаторядковий
коментар
*/

/**
 * JSDoc
 */


// 4. Які стилі написання імен змінних ти знаєш?

// camelCase and snake_case


// Норма

// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

const userName = prompt("What is your name?");
const userGreeting = 'Hello, ';
console.log(userGreeting, userName);


// 2. Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

const yearOfBirth = prompt("When were you born (year)?");
const currentYear = 2023;
const age = currentYear - yearOfBirth;
console.log(age);


// 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

const length = prompt("Please enter length of the side of the square");
const perimeter = length * 4;
console.log(perimeter);


// Максимум

// 1. Запитай у користувача радіус кола і виведи площу такої окружності.

const radius = prompt('Please enter radius of a circle');
const PI = Math.PI;
const circleArea = (radius ** 2) * PI;
console.log(circleArea);


// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

const distance = prompt('What is the distance between 2 cities?');
const time = prompt('How long should it take to get from 1 city to another (hours)?');
const speed = distance / time;
const speedTwoDecimals = speed.toFixed([2]);
console.log('Your speed should be ' + speedTwoDecimals + ' km/hr.');


// 3. Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.

const exchangeCourse = 0.92;
const dollars = prompt("Enter your amount in dollars");
const euros = dollars * exchangeCourse;
const eurosTwoDecimals = euros.toFixed([2]);
console.log("You will get " + eurosTwoDecimals + " euros.");
