export class validators {
    static checkvalidage(age) {
        let x = age;
        if (120 > x && x > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    static checkvalidemail(email) {
        // let y=email;
        if (email.length > 0 &&
            email.indexOf("@") != -1 &&
            (email.endsWith(".com") || email.endsWith(".co.il"))) {
            return true;
        }
        else {
            return false;
        }
    }
    static checkvalidname(username) {
        let letters = /^[a-za-z]+$/;
        if (username.length >= 3) {
            return true;
        }
        else {
            return false;
        }
    }
}
export class Phone {
    fname;
    lname;
    numberr;
    constructor(fname, lname, numberr) {
        this.fname = fname;
        this.lname = lname;
        this.numberr = numberr;
    }
}
