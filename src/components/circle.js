const Shape = require("./shape.js");
// declare class

class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("calculate Area of Circle");
  }
}

module.exports = Circle;
