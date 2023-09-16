// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// a) Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// b) Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

const itemOne = {
    name: 'Product 1',
    qty: 4,
    price: 10,
    bought: false,
};

const itemTwo = {
    name: 'Product 2',
    qty: 3,
    price: 20,
    bought: true,
};

const itemThree = {
    name: 'Product 3',
    qty: 2,
    price: 30,
    bought: false,
};

const itemFour = {
    name: 'Product 4',
    qty: 1,
    price: 30,
    bought: true,
};

const itemFive = {
    name: 'Product 5',
    qty: 1,
    price: 50,
    bought: false,
};

itemOne.totalPrice = itemOne.qty * itemOne.price;
itemTwo.totalPrice = itemTwo.qty * itemTwo.price;
itemThree.totalPrice = itemThree.qty * itemThree.price;
itemFour.totalPrice = itemFour.qty * itemFour.price;
itemFive.totalPrice = itemFive.qty * itemFive.price;

const shoppingList = [itemOne, itemTwo, itemThree, itemFour];

function showList(array) {
    array.sort((a, b) => a.bought - b.bought);
    return console.log(array);
}

showList(shoppingList);


function purchaseItem(item) {
    item.bought = true;
    return item.bought;
}

purchaseItem(itemThree);

console.log(itemThree);

// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function removeItem(array, productName) {
    return array.filter(item => item.name !== productName);
}

const editedList = removeItem(shoppingList, 'Product 2');

console.log(editedList);

function addItem(array, newItem) {
    const existingItem = array.find(item => item.name === newItem.name);
    if (existingItem) {
        existingItem.qty = existingItem.qty + newItem.qty;
        existingItem.totalPrice = existingItem.qty * existingItem.price;
    } else {
        array.push(newItem);
    }

    return array;
}
addItem(shoppingList, itemOne);

console.log(shoppingList);
