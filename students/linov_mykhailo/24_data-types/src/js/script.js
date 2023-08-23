// Мінімум


// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const firstNumber = 0.1;
const secondNumber = 0.2;
const sumOfTwoNumbers = ((firstNumber * 10) + (secondNumber * 10)) / 10;
console.log(sumOfTwoNumbers);


// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const string = '1';
const number = 2;
const sumOfStringAndNumber = ((+string) * 10 + number * 10) / 10;
console.log(sumOfStringAndNumber);


// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const objectSize = 0.82;
const userGigabytes = prompt('Please enter size of your flash drive in GB');
const quantityOfFilesThatFitOnFlashDrive = (Math.floor(userGigabytes / objectSize));
console.log('You can download ' + quantityOfFilesThatFitOnFlashDrive + ' files on this flash drive.');


// Норма


// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const userMoney = prompt("Please enter amount of your money");
const chocolatePrice = prompt("Now please enter the cost of the chocolate bar");
const chocolateQuantity = Math.floor(userMoney / chocolatePrice);
const whatRemains = (userMoney - (chocolateQuantity * chocolatePrice)).toFixed(2);
console.log('You can buy ' + chocolateQuantity + ' chocolate bars and you will have ' + whatRemains + ' hryvnas left.');


// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const userNumber = prompt('Please enter a three-digit number');
const hundreds = (userNumber % 10) * 100;
const tens = (~~(userNumber / 10) % 10) * 10;
const singles = (~~(userNumber / 100));
const reverseUserNumber = hundreds + tens + singles;
console.log('Here is your number, reversed: ' + reverseUserNumber);


// Максимум


// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const customerAmount = prompt('Please enter your amount');
const accumulatedPercentage = customerAmount * 0.05;
const accumulatedPercentageMonth = accumulatedPercentage / 12;
const twoMonths = (accumulatedPercentageMonth * 2).toFixed(2);
console.log(twoMonths);


// 2. Що повернуть вирази:


//  2 && 0 && 3

0;
console.log(2 && 0 && 3);

//  2 || 0 || 3

2;
console.log(2 || 0 || 3);

// 2 && 0 || 3

3;
console.log(2 && 0 || 3);
