class Person {
  // //instance method:
  sayHi() {
    console.log("Hi");
  }
  //static method:
  static sayHi2() {
    console.log("Hi2");
  }
  hex() {
    const redHex = this.r.toString(16).padStart(2, "0"); //f to 0f  (255 = FF)
    const greenHex = this.g.toString(16).padStart(2, "0");
    const blueHex = this.b.toString(16).padStart(2, "0");

    const hexColor = `#${redHex}${greenHex}${blueHex}`.toUpperCase();
    return hexColor;
  }

  static toHex(r: number, g: number, b: number) {
    const redHex = r.toString(16).padStart(2, "0"); //f to 0f  (255 = FF)
    const greenHex = g.toString(16).padStart(2, "0");
    const blueHex = b.toString(16).padStart(2, "0");

    const hexColor = `#${redHex}${greenHex}${blueHex}`.toUpperCase();
    return hexColor;
  }
  //methods:
  rgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  //static methods:
  static fromRgb(red: number, green: number, blue: number) {
    return `rgb(${red}, ${green}, ${blue})`;
  }
}

//instance method / object method / מופע
const p1 = new Person();
p1.sayHi();

//static method: *no instance required
Person.sayHi2();

export class Utils {
  static currentDateString() {
    const date = new Date();
    const currentDateString = date.toLocaleDateString("he-IL", {
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      fractionalSecondDigits: 3,
    });
    return currentDateString;
  }

  static random(from: number, to: number) {
    return Math.floor(Math.random() * (to - from)) + to;
  }
}
console.log(Utils.random(10, 20));

import { Rectangle } from "./color.js";


// const rect1 = new Rectangle(100, 10);
// console.log(rect1);
/////////////////
/////////////////
/////////////////
/////////////////
/////////////////
/////////////////
/////////////////

const rectHeightInput = document.getElementById(
  "rect-height"
) as HTMLInputElement;
const rectWidthInput = document.getElementById(
  "rect-width"
) as HTMLInputElement;
const rectDrawButton = document.getElementById("btn-draw") as HTMLButtonElement;
const rectBoxDiv = document.getElementById("rect-box") as HTMLDivElement;
const rectangles: Rectangle[] = [];
rectDrawButton.addEventListener("click", () => {
  //height, width from the inputs
  const height = Number(rectHeightInput.value);
  const width = +rectWidthInput.value;
  const rect = new Rectangle(height, width);

  //create the box div:
  const rectDiv = document.createElement("div");
  rectDiv.style.backgroundColor = "blueviolet";
  rectDiv.style.width = `${width}px`;
  rectDiv.style.height = `${height}px`;
  rectDiv.innerText = rect.toString();
  rectDiv.addEventListener("click", (e) => {
    rectDiv.remove();
    console.log(rectDiv);
  });

  //add the box div:
  rectBoxDiv.appendChild(rectDiv);
  rectangles.push(rect);
  localStorage.setItem("rectangles", JSON.stringify(rectangles));
});



import { validators } from "./homework.js";
import { Phone } from "./homework.js";

const email = document.getElementById("email") as HTMLInputElement;
const myage = document.getElementById("age") as HTMLInputElement;
const username = document.getElementById("username") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const btn2 = document.getElementById("btn2") as HTMLButtonElement;

const box = document.getElementById("box") as HTMLDivElement;
const box1 = document.getElementById("box1") as HTMLDivElement;
const box2 = document.getElementById("box2") as HTMLDivElement;
const box3 = document.getElementById("box3") as HTMLDivElement;
let myx = [];
localStorage.getItem("myx");

console.log(myx);

btn.addEventListener('click', () => {

  email.value;
  username.value;
  myage.value;
  let namevalid = validators.checkvalidname(username.value);
  let isemailvalid = validators.checkvalidemail(email.value);
  let agevalid = validators.checkvalidage(myage.value);
  if (isemailvalid) {
    // alert('bb')
    box.innerText = 'youe email is corect'
  } else {
    // alert('cc')
    box.innerText = 'youe email is no corect'
  }
  if (namevalid) {
    // alert('bb')
    box1.innerText = 'youe name is corect'
  } else {
    // alert('cc')
    box1.innerText = 'youe name is no corect'
  }
  if (agevalid) {
    // alert('bb')
    box2.innerText = 'youe age is corect'
  } else {
    // alert('cc')
    box2.innerText = 'youe age is no corect'
  }


  if (namevalid && agevalid && isemailvalid) {
    myx.push(new Phone(username.value, email.value, myage.value))
    console.log(myx);
    localStorage.setItem("myx", JSON.stringify(myx));
    box3.innerHTML += `<div>
        <div>${username.value}</div>
        <div>${myage.value}</div>
        <div>${email.value}</div>
    </div>`
  }
})
const btn3 = document.getElementById("btn3") as HTMLDivElement;
btn2.addEventListener('click', () => {
  btn3.innerText = 'close'
  btn2.innerHTML = `
  <div class="gg">
        <div class="d-blok bg-primary">ahmad</div>
        <div class="d-blok bg-black">ahmad <br>ahmad</div>
        <div class="d-blok bg-danger">ahmad</div>
    </div>`


})
btn3.addEventListener('click', () => {
  btn2.innerText = 'click22'
  btn3.innerText = ''
})





