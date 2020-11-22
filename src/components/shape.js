
// declare class
class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    console.log("draw Shape");
  }
  calculateArea() {
    console.log("calculate Area of Shape");
  }
}
// export class using module.exports
module.exports = Shape;
