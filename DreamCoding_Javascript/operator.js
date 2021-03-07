// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log("joon's study says \n\"hello, \tthere\"");

// 2. Numeric operators
console.log(1 + 1); // add(덧셈)
console.log(1 - 1); // substract(뺄셈)
console.log(1 / 1); // divide(나누기)
console.log(1 * 1); // multiply(곱)
console.log(5 % 2); // remainder(나머지)
console.log(2 ** 3); //  exponentiation(지수)

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter; 
console.log(`counter : ${counter}, preIncrement : ${preIncrement}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1; 
console.log(`counter : ${counter}, postIncrement : ${postIncrement}`);

// --도 위와 같은 원리로 동작

// 4. Assignment operators
let x = 3;
let y = 6;
console.log(x += y); // x = x + y
console.log(x -= y); // x = x - y
console.log(x *= y); // x = x * y
console.log(x /= y); // x = x / y

// 5. Comparison operators 
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log(10 > 6) // greater than
console.log(10 >= 6) // greater than or equal

// 6. Logical operator : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;
function check(){
    for(let i = 0; i < 10; i++){
        console.log("😅");
    }
    return true;
}

// ||(or), finds the first truth value
console.log(`or : ${value1 || value2 || check()}`);
// 연산이 가장 오래 걸리는 함수는 가장 마지막에 실행되는 것이 좋다.

// &&(and), finds the first truth value
console.log(`and : ${value1 && value2 && check()}`);
// null 체크를 할 때도 많이 쓰임. 
// nullableObject && nullableObject.something

// !(not)
console.log(!value1);

// 7. Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// object equality by reference

const joon1 = { name : 'joon' };
const joon2 = { name : 'joon' };
const joon3 = joon1;

console.log(joon1 == joon2); // 다른 reference 값을 가지므로 false
console.log(joon1 == joon3); // 동일한 ref값을 가지므로 true
console.log(joon1 === joon2); // 똑같은 타입이더라도 다른 ref값이므로 false
console.log(joon1 === joon3); // 동일한 ref값을 가지므로 true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // *true
console.log(null == undefined); // false

// 8. Conditional operators : if
// if, else if, else
const name = 'hi';
let msg;
if(name === 'joon'){
    msg = "Hi joon!"
} else if (name === 'coder'){
    msg = "You are awesome coder!"
} else{
    msg = "unknown";
}
console.log(msg)

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'joon' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('Go Away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2){
    //inline variable declaration
    console.log(`inline variable for : ${i}`);
}

// nested loops
// 시간복잡도가 O(n^2)이므로 CPU에 부담을 준다. 따라서 가급적 사용X
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for (let i = 0; i < 11; i++){
    if (i % 2 === 0){
        console.log(`i : ${i}`);
    }
    else continue;
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (let i = 0; i < 11; i++){
    if (i > 8){
        break
    } else {
        console.log(`i : ${i}`);
    }
}