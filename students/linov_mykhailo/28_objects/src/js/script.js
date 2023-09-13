// Minimum

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

const car = {
    manufacturer: 'BMW',
    model: 'X5',
    yearOfManufacture: 2023,
    averageSpeed: 100,
    fuelConsumption: 20,
    drivers: 'Michael, Alexey, Eugene',
    informationAboutCar: function () {
        console.log('Manufacturer: ' + this.manufacturer);
        console.log('Model: ' + this.model);
        console.log('Year of manufacture: ' + this.yearOfManufacture);
        console.log('Average Speed: ' + this.averageSpeed + ' km/h');
        console.log('Fuel consumption: ' + this.fuelConsumption + ' liters per 100 km');
        console.log('Drivers: ' + this.drivers);
    },
    addDriver: function (newDriver) {
        return this.drivers = this.drivers + ", " + newDriver;
    },
    isDriverInList: function (driverName) {
        if (car.drivers.includes(driverName)) {
            console.log('This driver is on the list')
        } else {
            console.log('This driver is not on the list')
        }
    },
    howMuchTimeItTakes: function (distance) {
        const averageSpeed = this.averageSpeed;
        const fuelConsumption = this.fuelConsumption;
        const breakInterval = 4;
        const breakTime = 1;

        const numberOfSegments = Math.ceil(distance / (averageSpeed * breakInterval));

        const timeOnFullSegments = (distance / averageSpeed) + (numberOfSegments - 1) * breakTime;

        const totalFuelConsumption = (fuelConsumption / 100) * distance;

        const timeNeeded = timeOnFullSegments.toFixed(2);
        const fuelNeeded = totalFuelConsumption.toFixed(2);

        console.log('It would take ' + timeNeeded + ' hours and ' + fuelNeeded + ' liters of fuel');
    },

}


car.informationAboutCar();
car.addDriver('Viktor');
car.informationAboutCar();
car.isDriverInList('Michael');
car.howMuchTimeItTakes(582);

// Normal

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
