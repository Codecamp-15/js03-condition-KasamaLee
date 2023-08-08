let firstNum = prompt('first number : ');
let secondNum = prompt('second number : ');
let thirdNum = prompt('third number : ');

if (firstNum >= secondNum && firstNum >= thirdNum) {
    if (secondNum >= thirdNum) {
        alert(`${firstNum} ,${secondNum} ,${thirdNum}`);
    }
    else {
        alert(`${firstNum}, ${thirdNum}, ${secondNum}`);
    }

} else if (firstNum <= secondNum && secondNum >= thirdNum) {
    if (firstNum >= thirdNum) {
        alert(`${secondNum}, ${firstNum}, ${thirdNum}`);
    }
    else {
        alert(`${secondNum}, ${thirdNum}, ${firstNum}`);
    }
} else {
    if (firstNum >= secondNum) {
        alert(`${thirdNum}, ${firstNum}, ${secondNum}`);
    }
    else {
        alert(`${thirdNum}, ${secondNum}, ${firstNum}`);
    }
}

// V.0 แสดงเฉพาะตัวมากสุด
// V.1 Handle เลขที่ไม่เหมือนกัน
// V.2 Handle เลขที่เหมือนกัน
// DRY Principle : Don't repeat yourself

// let x = Number(prompt('Enter number 1'));
// let y = +prompt('Enter number 2');
// let z = prompt('Enter number 3') *1 ; 

// let max;
// let mid;
// let min;
// if (x > y && x > z) {
//     max = x;
//     // 1A : y มากกว่า z
//     if (y > z) {
//         mid = y;
//         min = z;
//     } else {
//         mid = z;
//         min = y;
//     }
// } else if (y > x && y > z) {
//     max = y;
//     if (x > z) {
//         mid = z;
//         min = x;
//     } else {
//         mid = x;
//         min = z;
//     }
// } else if (z > x && z > y) {
//     max = z;
//     if (x > y) {
//         mid = x;
//         min = y;
//     } else {
//         mid = y;
//         min = x;
//     }
// }
// console.log(`${max} : ${mid} : ${min}`);


// if (x >= y && x >= z && y >= z) {
//     max = x;
//     mid = y;
//     min = z;
// } else if (x >= y && y >= z && x >= z) {
//     max = x;
//     mid = z;
//     min = y;
// } else if () {

// } else {
    
// }