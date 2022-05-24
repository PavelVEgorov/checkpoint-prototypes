// создаю файл dog.js
// импорта файла animal.js
const animal = require('./animal');

// создаю функцию Cat с параметрами: имя и возраст по умолчанию 1 год
function Dog(name, age = 2) {
  animal.call(this, name, age); // привязка контекста
}

// создаю метод say для прототипа на основе Dog
Dog.prototype.say = function () {
  return 'гав!';
};

// устанавливаю  прототип объектам Cat и animal
Object.setPrototypeOf(Dog.prototype, animal.prototype);

// экспорт функции Dog
module.exports = Dog;
