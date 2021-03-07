// 1. Use strict
// - Vanilla JS를 사용할 경우 'use strict'를 최상단에 선언하는 것을 권장
// - 문법적으로 맞지 않거나, 변수가 선언되지 않았음에도 정상적으로 처리되는 상황을 방지.

'use strict';

// 2. Variable(변수) : rw(read/write)
// - let : ES6에서 등장 (mutable - 변하기 쉬운)

let name = 'joon';
console.log(name);
name = 'hello';
console.log(name);

// Block scope 
// - 블록 단위로 선언된 부분은 지역변수로 할당됨
// - 따라서 블록 외부에서 해당 변수를 접근하는 것은 불가.

let globalName = 'this is a global name';
{
    let job = 'dev';
    console.log(job);
    job = 'consult';
    console.log(job);
    
    // 전역 변수를 블록 내부에서도 호출 가능
    console.log(globalName); 
}

// Uncaught ReferenceError : job is not defined
// console.log(job); 

// 전역 변수는 항상 실행되는 순간부터 메모리에 탑재되기 때문에 최소한으로 선언
// 가능하면 class, function, if, for 등 필요한 부분에서만 정의하는 것이 권장됨
console.log(globalName); 

// var (사용하지 않는 것을 권장)
// - 호이스팅(Hoisting)으로 인해 변수를 선언하기 전에 값을 할당해도 문제가 발생X
// - 호이스팅 : 어느 위치에 선언했든지 상관없이 항상 선언을 제일 위로 끌어올려주는 것.
// - block scope을 철저히 무시하므로 사용 X

// 아래의 문장을 실행하면 변수는 정의되었으나, 값이 들어가있지 않았다는 'undefined'가 출력됨
console.log(age);
age = 4;
// 변수에 값을 할당해주었으므로 4가 출력된다.
console.log(age);
var age;

// block scope를 무시하는 경우
{
    country = 'Seoul';
    var country;
}

// Seoul이 정상적으로 출력된다.
console.log(country)

// 3. Constant, r(read only)
// 값을 가리키고 있는 포인터가 잠겨있는 변수. (immutable)
// Immutable한 변수의 장점은 다음과 같다.
//  - security : 한번 작성한 코드를 누군가 임의로 수정할 수 없도록 방지
//  - thread safety : 다양한 thread가 같은 변수를 사용할 때, 값을 변하지 않도록 방지
//  - reduce human mistakes : 다른 개발자가 코드를 변경할 때도 실수를 방지

// Note!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// - 데이터 변경이 불가능
// Mutable data types : all objects by default are mutable in JS
// - 데이터 변경이 가능

// 4. Variable Types
// primitive, single item : 더 이상 작은 단위로 쪼개질 수 없는 한 가지의 아이템
//  - number, string, boolean, null, undefined, symbol
// object, box container : single item을 여러 개로 묶어서 한 단위로 관리할 수 있는 단위
// function, first-class function : function도 변수에 할당 가능하고, 해당 변수를 인자로 넘길 수도 있고, 리턴 타입으로도 함수를 사용할 수 있다.

// number 
// C나 Java와 달리 실수, 정수에 상관없이 number라는 데이터 타입에 동적으로 값을 할당할 수 있음.

const count = 12; // integer
const size = 12.1; // decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN
// 유효한 값을 연산하지 않는 경우에 다음과 같은 결과가 발생함. 

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // Nan (Not a Number)

// bigInt : 최근에 새로 나왔지만, 아직 사용하지는 않음. (Chrome, Firefox에서만 지원)
const bigInt = 12312412412431234n;
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);

// string
const char = 'c';
const youtube = 'youtube';
const greeting = 'hello ' + youtube; // + 기호로 string끼리 결합하는 것이 가능
console.log(`value : ${greeting}, type : ${typeof greeting}`);

// template literals : 백틱(`) 기호를 사용해서 + 연산자 없이 간편하게 string과 변수를 함께 출력가능
const helloYoutube = `hi ${youtube}!`;
console.log(`value : ${helloYoutube}, type : ${typeof helloYoutube}`);

// boolean
// - false : 0, null, undefined, Nan, ''
// - true : false가 아닌 모든 것들
const canRead = true;
const compare = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${compare}, type : ${typeof compare}`);

// null : 텅텅 비어있는 값이 할당된 상태.
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined : 변수가 선언은 되었으나 값이 할당되지 않은 상태.
let x;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol : 객체마다 고유한 식별자를 생성
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(`symbol1 === symbol2 : ${symbol1 === symbol2}`);
// 동일한 string으로 생성할 경우 for을 사용
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(`gSymbol1 === gSymbol2 : ${gSymbol1 === gSymbol2}`);
// symbol값 출력 시에는 string으로 변환 후 출력
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

// 5. Dynamic type : dynamically typed language
// 변수를 선언할 때 데이터 타입을 선언하지 않고도 런타임 시 할당된 값에 따라 데이터 타입을 결정
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type : ${typeof text}`); // string
text = 1;
console.log(`value : ${text}, type : ${typeof text}`); // number
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`); // string
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`); // number
// console.log(text.charAt(0)); // text.charAt is not a function

// object, real-life object, data structure
const joon = {
    name : 'joon',
    age : 20
};
console.log(`var : joon.age, value : ${joon.age}`);
// const로 선언된 joon이라는 객체는 다른 객체로 변경 불가능.
// joon이 가리키고 있는 메모리의 포인터는 잠겨 있어서 재할당 불가.
// 아래처럼 다른 객체로 변경하는 것은 불가.

/*
joon = {
    name : 'han',
    country : 'korea'
}
*/

// but, 객체 내부의 변수는 접근이 가능.

joon.age = 21;
console.log(`var : joon.age, value : ${joon.age}`);
console.log(`joon.name.length : ${joon.name.length}`);