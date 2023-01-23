function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}

let val = sum(6);
console.log(val);