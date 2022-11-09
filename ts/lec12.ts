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









import { Rectangle, RectangleType } from "./color.js";

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
    let index = rectangles.findIndex(b => b.timeStamp === rect.timeStamp)
    rectangles.splice(index, 1);
    localStorage.setItem("rectangles", JSON.stringify(rectangles));
  });

  //add the box div:
  rectBoxDiv.appendChild(rectDiv);
  rectangles.push(rect);
  localStorage.setItem("rectangles", JSON.stringify(rectangles));
});
function init() {
  //null coallescing operator
  const str = localStorage.getItem("rectangles") ?? "[]";
  //JSON.parse(str) => any
  //TS {}[]
  const arrFromDisk: RectangleType[] = JSON.parse(str);

  //Rectangle Objects (NOT Literal)
  // arrFromDisk.forEach((o) => {
  //   const rect = new Rectangle(o.width, o.height);
  //   rect.timeStamp = o.timeStamp;
  //   rectangles.push(rect);
  // });

  for (const o of arrFromDisk) {
    const rect = new Rectangle(o.width, o.height);
    rect.timeStamp = o.timeStamp;
    // rectangles.push(rect);
    const rectDiv = document.createElement("div");
    rectDiv.style.backgroundColor = "blueviolet";
    rectDiv.style.width = `${o.width}px`;
    rectDiv.style.height = `${o.height}px`;
    rectDiv.innerText = rect.toString();

    rectDiv.addEventListener("click", () => {
      rectDiv.remove();
      //find the index of the current box in the rectnalges[] array
      let index = rectangles.findIndex((b) => b.timeStamp === rect.timeStamp);
      rectangles.splice(index, 1);
      localStorage.setItem("rectangles", JSON.stringify(rectangles));
    });
    //add the box div:
    rectBoxDiv.appendChild(rectDiv);
    rectangles.push(rect);
    localStorage.setItem("rectangles", JSON.stringify(rectangles));


  }

}

init();



interface PersonType {
  name: string;
  age: number;
  id: number;
}

class Personn {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  static fromLiteral(p: PersonType) {
    return new Personn(p.name, p.age);
  }
}
class user {
  name: string;
  age: number;
  id: number;
  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
  static fromLiteral(p: PersonType) {
    return new user(p.name, p.age, p.id);
  }
  toString() {
    return `User: Email: ${this.name}, id: ${this.id}, age: ${this.age}`;
  }

}
let p2 = user.fromLiteral({ name: "dave", age: 20, id: 123456789 });



















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
let myx: Phone[] = [];
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





