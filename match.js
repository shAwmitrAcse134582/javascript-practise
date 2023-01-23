let num = [45, 65, 34, 98, 19];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

//for of loop
for (const n of num) {
    console.log(n);
}

let products = [
    {
        id: 1,
        name: 'walton',
        price: 20000,
    },
    {
        id: 2,
        name: 'samsung',
        price: 22000,
    },
    {
        id: 3,
        name: 'Nokia',
        price: 10000,
    },
    {
        id: 4,
        name: 'xiaomi',
        price: 24000,
    },
    {
        id: 5,
        name: 'iphone',
        price: 120000,
    }
];

// for (const product of products) {
//     console.log(product);
// }

function matchedProduct(products, search) {
    let matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

let result = matchedProduct(products, 'phone');
console.log(result);