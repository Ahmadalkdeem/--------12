import { Utils } from "./lec12.js";
export interface RectangleType {
  height: number;
  width: number;
  timeStamp: string;
}

export class Rectangle {
  height: number;
  width: number;
  timeStamp: string;
  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.timeStamp = Utils.currentDateString();
  }

  //get/getter: computed property - תכונה מחושבת
  get area() {
    return this.height * this.width;
  }

  //method:
  calcArea() {
    return this.height * this.width;
  }

  toString() {
    //return JSON.stringify(this)
    return `Rectangle: height=${this.height}, width=${this.width}, area=${this.area}`;
  }
}
