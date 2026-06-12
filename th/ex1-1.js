/* 
- เราอยากพัฒนาโปรแกรมบวกลบคูณหารเลข ทุกครั้งจะรับ Parameter 3 ตัวคือ
    - เลขตัวที่ 1
    - เลขตัวที่ 2
    - กระบวนการทางคณิตศาสตร์
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

// Start Coding Here
/* 
สรุปว่ามี callback function กี่อัน -> 4 อัน ดูจาก add, subtract, multiply, divide
higher order มีชื่อว่า calculate (num1, num2, callback)
*/

// create callback function (add)
let add = function(num1, num2,) {
    return num1 + num2;
};

let subtract = function(num1, num2) {
    return num1 - num2;
}

let multiply = function(num1, num2) {
    return num1 * num2;
}

let divide = function(num1, num2) {
    /*
    if (num2 === 0) {
        return "Cannot divide by zero";
    }
    else {
        return num1 / num2;
    }
    */
    return num2 === 0 ? "Cannot divide by zero" : num1 / num2;
}

// create high order function (calculate)
let calculate = function(num1, num2, callback)  {
    return callback(num1, num2);
};


// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, multiply)); // 50
console.log(calculate(10, 5, divide)); // 2
console.log(calculate(10, 0, divide)); // "Cannot divide by zero"