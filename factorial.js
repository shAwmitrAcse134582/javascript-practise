//*find out factorial using recursion


function factorial(n) {
    // let fact=1;
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);

}

let num = 5;
let val = factorial(num);
console.log(val);



