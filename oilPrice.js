let oil = [
    {
        name: "disel",
        price: 114,
        quantity: 2
    },
    {
        name: "petrol",
        price: 130,
        quantity: 3,
    },
    {
        name: "octane",
        price: 135,
        quantity: 5

    }


];

function oilPrice(x) {
    let total = 0;
    for (let i = 0; i < x.length; i++) {
        let a = x[i];
        total += a.price * a.quantity;
    }
    return total;

}

let val = oilPrice(oil);
console.log(val);


