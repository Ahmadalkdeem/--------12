export class validators {
    static checkvalidage(age: number) {
        let x = age;
        if (120 > x && x > 0) {
            return true;
        } else {
            return false;
        }
    }
    static checkvalidemail(email: string) {
        // let y=email;
        if (
            email.length > 0 &&
            email.indexOf("@") != -1 &&
            (email.endsWith(".com") || email.endsWith(".co.il"))
        ) {
            return true;
        } else {
            return false;
        }
    }
    static checkvalidname(username: string) {
        if (username.length >= 3 && username.match(/[0-9]/) == null) {
            return true;
        } else {
            return false;
        }
    }
}
export class Phone {
    fname: string;
    lname: string;
    numberr: number;
    constructor(fname: string, lname: string, numberr: number) {
        this.fname = fname
        this.lname = lname
        this.numberr = numberr
    }
}
if ("HellO".match(/hello/i)) {
    console.log("Matches");
} else {
    console.log("Does not Match");
}
