let friends = [
    {
        name: 'Tom',
        friend: 'golla'
    },
    {
        name: 'Rock',
        friend: 'Tom'
    }
];
function isBestFriend(x) {
    for (let i = 0; i < x.length - 1; i++) {
        if (x[i].name == x[i + 1].friend && x[i + 1].name == x[i].friend)
            // *console.log("they are best friend");
            return "they are best friend";
        else {
            //* console.log("They are not Best friend");
            return "They are not Best friend";
        }

    }

}

let val = isBestFriend(friends);
console.log(val);