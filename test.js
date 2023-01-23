// *1.ludu khelar random score
function getRandomFunction(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomFunction(1, 6));


//* 2.kivabe friend der nam alphabatetically sajano jay
const student = ["shawmitra", "kawshik", "monisha", "arnab"];
console.log(student.sort());

//* 3.kiavbe roll number order onujai sajano jay

const roll = [20, 10, 4, 3, 2, 1, 7, 8, 9];

console.log(roll.sort(function (a, b) {

    return a - b;
}))

//* 4.check leap year or not!
function isLeapyear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {

        console.log(`${year} is a leap year`);

    } else {
        console.log(`${year} is not a Leap year`);
    }
}
isLeapyear(2024);

// 5.count vowel from a sentence 

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowel(sentence) {
    let cnt = 0;
    const letters = Array.from(sentence);
    letters.forEach(function (value) {
        if (vowels.includes(value)) {
            cnt++;
        }
    });
    return cnt;
}

console.log(countVowel("My name Is Shawmitra das Dwip"));

//* 6.find out duplicate value

const numbers = [1, 2, 3, 4, 5, 1, 2, 3];

const duplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) != index;
});
console.log(duplicates);


//* 7.find out unique Number

const numbers = [1, 2, 3, 4, 5, 1, 2, 3];

const duplicates = numbers.filter(function (value, index, array) {
    return array.indexOf(value) != index;
});
console.log(duplicates);

// set
const mySet = new Set(["a", "b", "c"]);
// mySet.add("a");
// mySet.add("b");
// mySet.add("c");
let text = "";
mySet.forEach(function (value) {

    text += value;
});
console.log(text);
// Map

const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.delete("apples");

console.log(fruits);




