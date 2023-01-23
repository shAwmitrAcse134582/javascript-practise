function publicBusFare(n) {
    let bus = n % 50;
    let micro = bus % 11;
    return micro * 250;

}

let passanger = 65;
let val = publicBusFare(passanger);
console.log(val);