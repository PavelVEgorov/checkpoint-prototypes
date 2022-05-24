// создаю файл cat.js
// импорта файла animal.js
const animal = require('./animal');

// создаю функцию Cat с параметрами: имя и возраст, возраст по умолчанию 1 год
function Cat(name, age = 1) {
  animal.call(this, name, age); // привязка контекста
}

// создаю метод say для прототипа на основе конструктора Cat
Cat.prototype.say = function () {
  return 'мяу!';
};

// устанавливаю  прототип объектам Cat и animal
Object.setPrototypeOf(Cat.prototype, animal.prototype);

// экспорт функции Cat
module.exports = Cat;
