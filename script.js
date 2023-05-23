//task 1

let a = 10;
let b = 20;
let c = 30;

console.log(a < b < c);

task 2

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + y;
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = (x / 0) / (y / 0);
console.log(res4);
console.log(typeof res4);

//task 3

function age() {
    let isAdult = prompt("How old are you?");
    if (isAdult >= 18) {
        alert("Ви досягли повнолітнього віку");
    } else {
        alert("Ви ще надто молоді");
    }
}

age()

//task 4

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]


//task 5

let eSide = parseFloat(prompt("Enter 'd' side of the triangular"));
let dSide = parseFloat(prompt("Enter 'd' side of the triangular"));
let fSide = parseFloat(prompt("Enter 'f' side of the triangular"));

let halfsquare = (eSide + dSide + fSide) / 2;
let square = Math.sqrt(halfsquare * (halfsquarer - eSide) * (halfsquare - dSide) * (halfsquare - fSide));

console.log(square.toFixed(3));

if (eSide * eSide + dSide * dSide === fSide * fSide ||
    eSide * eSide + fSide * fSide === dSide * dSide ||
    dSide * dSide + fSide * fSide === a * a) {
    console.log("triangle")
} else {
    console.log("not triangle")
}


//task 6

function calc(a, b, op) {
    if (op === 1) {
        return a - b;
    } if (op === 2) {
        return a + b;
    } if (op === 3) {
        return a / b;
    } else {
        return a + b;
    }

}

//task 7

function findUnique(arr) {
    let uniqueElemetns = new Set(arr);
    return arr.length === uniqueElemetns.size;
}

const arr1 = [2, 3, 4, 6, 7];
console.log(findUnique(arr1));
const arr2 = [1, 1, 2, 2, 4, 5];
console.log(findUnique(arr2)); 