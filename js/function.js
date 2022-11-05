function random(min, max) {
    //decimal random
    let rand = min + Math.random() * (max - min);

    //integer:
    rand = Math.floor(rand);

    //return the result:
    return rand;
}
function random1(max) {
    //Math.random 0 inclusice to 1 (exclusive) (0 to 0.999999)
    let r = Math.random() * max; //max = 10 =>  0 to 9.99999
    r = Math.floor(r); //0 to 9

    return r;
}
