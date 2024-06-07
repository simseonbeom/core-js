/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// function sum(...args){

// }

// const sum2 = function (...args){

// }



// 함수 선언 → 화살표 함수 (표현)식
//                   rest parameter
let calcAllMoney  = (...rest) => {
  
  let total = 0;

  // for 문 
  // for(let i = 0; i < rest.length; i++){
  //   total += rest[i];
  // }


  // for...of 문
  // for(let value of rest){
  //   total += value;
  // }

  // forEach  => arrow function
  // rest.forEach(function(item){
  //   total += item;
  // })

  // rest.forEach(item => total += item)


  // reduce => arrow function

  // const result = rest.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  
  return rest.reduce((acc,cur) => acc + cur,0);

};


const calc = (...rest)=> rest.reduce((acc,cur) => acc + cur,0);

const result = calcAllMoney(1000,5000,4500,13000);

console.log(result);

// 화살표 함수와 this



// function create(nickName,number){
  
//   return 
// }

// create('tiger',40)

// 자바스크립트의 함수는 양면의 얼굴  => 일반 함수(normal function) / 생성자 함수(constructor function) 


function Button2(){

}

// 생성자로만 사용하세요
const Button = (text) => {

  this.content = text;
  // return text
  
}


class Button3 {

}

new Button3()

// const a = Button('more')
// const b = new Button('more')


// const str = new String('aaa');


// new Number()
// new Object()
// new Array()


// 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 => this를 찾기 위해

// 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음.
// - 메서드 안의 함수를 작성해야 할 때 // 내 상위 this를 가져오기 때문에



const user = {
  name: '박새롬',
  total:0,
  grades:[30,60,80],
  totalGrades(){

    this.grades.forEach(function(){
      
    })

    return this.total
    
  }
}

user.totalGrades()


function forEach(func){
  func()
}


forEach(function(){})

// 객체의 메서드를 정의하는 방법









const another = {
  name:'tiger',
  sayHi: user.sayHi
}











/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount)=>{

//   let result = 1;

//   for(let i = 0; i < powerCount; i++){
//     result *= numeric
//   }
//   return result;
// }; 

// 표현식

// const pow = (numeric,powerCount) => {
  
//   return Array(powerCount).fill(null).reduce((acc)=>{
//     return acc *= numeric
//   },1)

// }


const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric,1)






// repeat(text: string, repeatCount: number): string;
// let repeat = (text,repeatCount)=>{

//   let result = '';

//   for(let i = 0; i < repeatCount; i++){
//     result += text;
//   }
//   return result
// }; 



// const repeat = (text,repeatCount)=>{
//   return Array(repeatCount).fill(null).reduce((acc)=>{
//     return acc + text
//   },'')
// }

const repeat = (text,repeatCount)=> Array(repeatCount).fill(null).reduce((acc)=> acc + text,'')


// repeat('사랑해👋',3)  // '안녕👋안녕👋안녕👋'





























