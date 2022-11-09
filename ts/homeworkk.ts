interface fullname {
    name: string;
    age: string;
}
function myfullname(name: string, age: number) {
    console.log(name);
    console.log(age);
}
myfullname('ahmad', 18)



const username = document.getElementById('username') as HTMLInputElement;
const age = document.getElementById('age') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const btn = document.getElementById('btn') as HTMLButtonElement;
const myyy = document.getElementById('myyy') as HTMLButtonElement;
const box = document.getElementById('box') as HTMLDivElement;
const bc = document.getElementById('bc') as HTMLDivElement;
class mynumber {
    fullname: string;
    email: string;
    age: number;
    constructor(fullname: string, age: number, email: string) {
        this.fullname = fullname
        this.age = age
        this.email = email

    }
}
let arr: mynumber[] = []
btn.addEventListener('click', () => {
    if (username.value == '' && age.value == '' && email.value == '') {
        console.log('zz');
    } else {
        arr.push(new mynumber(username.value, age.value, email.value))
        localStorage.setItem('mynumber', JSON.stringify(arr))
        // console.log(arr);
        box.innerHTML += `<div class="aa">${username.value}
        <br>${age.value}
        <br>${email.value}
        <br>
    </div>`}
})

interface RectangleType {
    fullname: string;
    age: number;
    email: string;
}

function myt() {
    const str = localStorage.getItem('mynumber') ?? "[]";
    const arrFromDisk: RectangleType[] = JSON.parse(str);
    arrFromDisk.forEach((p) => {
        const x = new mynumber(p.fullname, p.email, p.age)

        box.innerHTML += `<div class="aa">${p.fullname}
        <br>${p.age}
        <br>${p.email}
        <br>
    </div>`
        arr.push(x);
        localStorage.setItem('mynumber', JSON.stringify(arrFromDisk))
    })
}
myt();
myyy.addEventListener('click', () => {
    if (bc.style.display == "none") {
        bc.style.display = "block";
        document.body.style.opacity = '0.6';
    }
    else {
        bc.style.display = "none";
        document.body.style.opacity = '1';
    }
})
function zz() {
    if (bc.style.display == "none") {
        bc.style.display = "block";
        // document.body.style.background = 'red';
    }
    else {
        bc.style.display = "none";
        // document.body.style.background = '#fff';
    }
}
zz()
function zzz(val: any) {
    if (val) {
        console.log(val + 'is trutht');
    } else {
        console.log(val + 'is falsy');

    }
}
zzz(true)
zzz({})
zzz([])
zzz(42)
zzz('0')
zzz('false')