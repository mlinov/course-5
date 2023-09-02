// Мінімум

// 1. Напиши всі можливі варіанти створення функцій.

function asdf() {
    return '10'
};
console.log(asdf());

const example = function examp() {
    return '1'
}
console.log(example());

const add = (a, b) => {
    return a + b;
}
console.log(add('asdf', 'qwer'));

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

function quantity(...args) {
    const numberOfArgs = args.length;

    return numberOfArgs;
}
console.log(quantity('1223', 1234, "asdf"));

// console.log(quantity(123123, 25, 358, 'SDFGH', 'asdfasdf'));

// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.


function twoNumbers(first, second) {
    if (first < second) {
        return '-1'
    } else if (second < first) {
        return '1'
    } else {
        return '0'
    }
}

console.log(twoNumbers(1, 6));
console.log(twoNumbers(10, 6));
console.log(twoNumbers(5, 5));

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(number) {
    if (number < 0 || isNaN(number)) {
        return "This is not a correct input"
    }
    else if (number === 0) {
        return '1';
    }
    else {
        const factorialNumber = number * factorial(number - 1);
        return factorialNumber;
    }
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-3));
console.log(factorial('asdf'));


// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function threeNumbers(num1, num2, num3) {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 < 0 || num2 < 0 || num3 < 0) {
        return ('Please enter valid numbers(0-9)')
    }
    else {
        const numberString1 = num1.toString();
        const numberString2 = num2.toString();
        const numberString3 = num3.toString();
        const finalNumber = Number(numberString1 + numberString2 + numberString3);
        return finalNumber;
    }
}

console.log(threeNumbers(5, 2, 3));

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function squareOfRectangle(length, width) {
    if (isNaN(length) || length < 0) {
        return ('Please enter valid length');
    }
    if (width !== undefined && (isNaN(width)) || width < 0) {
        return ('Please enter valid width');
    }
    let square;
    if (width === undefined) {
        square = length * length;
    }
    else {
        square = length * width;
    }
    return square;
}

console.log(squareOfRectangle(5, 6));
console.log(squareOfRectangle(5));

// Норма

// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function perfectNumber(n) {
    if (n <= 0) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    return sum === n;
}

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function range(start, end) {
    let arrayOfPerfectNumbers = [];
    if (!start || !end || start < 0 || end < 0 || (isNaN(start)) || (isNaN(end))) {
        return 'This is not a valid input'
    } else {
        for (let num = start; num <= end; num++) {
            if (perfectNumber(num)) {
                arrayOfPerfectNumbers.push(num);
            };
        }

        return arrayOfPerfectNumbers;
    }
}

console.log(range(1, 5000));
