/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 F&& 
let AandB = a && b;
console.log('AandB : ',AandB)


// 논리곱 할당 연산자 Logical AND Assignment
// a &&= b



// 논리합(또는) 연산자 ||
let AorB = a || b;
console.log('AorB : ',AorB)


// 논리합 할당 연산자 Logical OR Assignment
// a ||= b



// 부정 연산자
let reverseValue = !value;
console.log('reverseValue : ',reverseValue)


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};






// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsTruthy:true};
















