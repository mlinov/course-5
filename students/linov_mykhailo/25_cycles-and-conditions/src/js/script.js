// Мінімум


// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const userAge = prompt('Enter your age', '');
const age = userAge;

if (age >= 0 && age <= 11) {
    console.log("You are a child");
} else if (age >= 12 && age <= 17) {
    console.log("You are a teenager");
} else if (age >= 18 && age <= 59) {
    console.log("You are an adult");
} else if (age >= 60) {
    console.log("You are an elder");
} else {
    console.log('This is incorrect input')
}


// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const userNumber = prompt('Enter your number from 0 to 9', '');
const number = Number(userNumber);
switch (number) {
    case 0:
        console.log(')');
        break;
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
}


// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const userRangeStart = Number(prompt("Enter start number of a range", ""));
const userRangeEnd = Number(prompt("Enter last number of a range", ""));
let range = 0;

for (var i = userRangeStart; i <= userRangeEnd; i++) {
    range += i;
}

console.log(range);


// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNum = Number(prompt('Please enter first number', ''));
const secondNum = Number(prompt('Please enter second number', ''));

let a = Math.max(firstNum, secondNum);
let b = Math.min((firstNum, secondNum));

while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
}

console.log("The greatest common divisor is " + a);


// 5. Запитай у користувача число і виведи всі дільники цього числа.

const askNumber = Number(prompt('Please enter a number', ''));

let aaa = askNumber;
let goingUp = 1;

console.log('Here are the dividers for your number: ');

while (aaa >= goingUp) {

    const remainder = aaa % goingUp;
    if (remainder === 0) {
        console.log(goingUp);
    }
    goingUp++;
}


// Норма


// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const userNumberPalindrome = prompt('Please enter a five-digit number');

if (!isNaN(userNumberPalindrome) && userNumberPalindrome.length === 5) {
    let isPalindrome = true;

    for (let i = 0; i < 2; i++) {
        if (userNumberPalindrome[i] !== userNumberPalindrome[4 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        console.log('The number is a palindrome.');
    } else {
        console.log('The number is not a palindrome.');
    }
} else {
    console.log('Invalid input. Please enter a five-digit number.');
}


// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// 2.a від 200 до 300 - знижка буде 3%;
// 2.b від 300 до 500 - 5%;
// 2.c від 500 і вище - 7%.

const userAmount = Number(prompt('Please enter a number', ''));
let userDiscount;
if (userAmount > 0 && userAmount < 200) {
    userDiscount = 0;
}
else if (userAmount >= 200 && userAmount < 300) {
    userDiscount = 0.03;
} else if (userAmount >= 300 && userAmount < 500) {
    userDiscount = 0.05;
} else if (userAmount >= 500) {
    userDiscount = 0.07;
} else {
    console.log('Please enter a correct amount.')
}


let userPrice = Number(userAmount * (1 - userDiscount)).toFixed(2);

console.log('Your final price is ' + userPrice);


// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let positiveNumber = 0;
let negativeNumber = 0;
let zeroNumber = 0;
let evenNumber = 0;
let oddNumber = 0;

for (let i = 0; i < 10; i++) {
    const askUser = Number(prompt('Please enter number ' + (i + 1), ''));

    if (isNaN(askUser)) {
        console.log('Invalid input for number ' + (i + 1) + '. Please enter a valid number.')
        i--;

    } else {
        if (askUser > 0) {
            positiveNumber++;
        } else if (askUser < 0) {
            negativeNumber++;
        } else {
            zeroNumber++;
        }

        if (askUser % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }
}
console.log('Positive Numbers: ' + positiveNumber);
console.log('Negative Numbers: ' + negativeNumber);
console.log('Zero Numbers: ' + zeroNumber);
console.log('Even Numbers: ' + evenNumber);
console.log('Odd Numbers: ' + oddNumber);


// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

let userConfirm;
let counter = 0;
do {
    let day;
    if (counter === 0) {
        day = 'Monday';
    } else if (counter === 1) {
        day = 'Tuesday';
    } else if (counter === 2) {
        day = 'Wednesday';
    } else if (counter === 3) {
        day = 'Thursday';
    } else if (counter === 4) {
        day = 'Friday';
    } else if (counter === 5) {
        day = 'Saturday';
    } else {
        day = 'Sunday';
    }

    userConfirm = confirm(day + '. Do you want to see the next day?');
    counter = (counter + 1) % 7;
} while (userConfirm == true);


// Йолка easy

const userHashEasy = Number(prompt('Please enter hash quantity'), '');
let pyramid = '';
for (let i = 0; userHashEasy > i; i++) {

    for (let j = 0; j <= i; j++) {
        pyramid += '#';
    }
    pyramid += '\n';
}

console.log(pyramid);


// Йолка normal

const userHashNormal = Number(prompt('Please enter hash quantity'), '');

let reversePyramid = '';

for (let i = 1; i <= userHashNormal; i++) {

    for (let s = 0; s < userHashNormal - i; s++) {
        reversePyramid += ' ';
    }

    for (let j = 0; j < i; j++) {
        reversePyramid += '#';
    }

    reversePyramid += '\n';
}

console.log(reversePyramid);
