// создаю файл animal.js
// создаю функцию конструктор с парамтерами name и age
function animal(name, age) {
  this.name = name;
  this.age = age;
}

// экспорт функции animal
module.exports = animal;
