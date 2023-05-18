//task 1

let a = 10;
let b = 20;
let c = 30;

console.log(a < b < c);

//task 2

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
    if (isAdult >= 18 ) {
        alert("Ви досягли повнолітнього віку");
    } else {
        alert("Ви ще надто молоді");
    }   
}

age()

//task 4

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]


//task 5