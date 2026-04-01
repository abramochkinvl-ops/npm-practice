// index.js
module.exports = function() {
  console.log('My first npm package!');
};

// Додаємо виклик функції
const myPackage = require('./index.js');
myPackage();