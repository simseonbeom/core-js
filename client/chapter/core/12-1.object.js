/* --------- */
/* Object    */
/* --------- */

/* global isObject */




// const html = /* html */ `
//   <h1>title</h1>
//   <div class="first">
//     hello
//   </div>
// `



// /* Primitives vs. Object --------- */

// // key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
// let cssCode = /* css */ `
//   .dialog {
//     position: fixed;
//     z-index: 10000;
//     top: 50%;
//     left: 50%;
//     width: 60vw;
//     max-width: 800px;
//     height: 40vh;
//     min-height: 280px;
//     transform: translate(-50%, -50%);
//   }
// `;

// // 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
// let cssMap = {
//   position: 'fixed',
//   zIndex:10000,
//   top:'50%',
//   left:'50%',
//   width:'60vw',
//   maxWidth:800,
//   height:'40vh',
//   minHeight:280,
//   transform: 'translate(-50%, -50%)'
// };


// // 인증 사용자 정보를 객체로 구성해봅니다.
// // 인증 사용자(authentication user)
// // - 이름
// // - 이메일
// // - 로그인 여부
// // - 유료 사용자 권한

// let authUser = null;

// authUser = {
//   uid:'user-id-zxk!@kadfkq',
//   name:'tiger',
//   email:'seonbeom2@gmail.com',
//   isSignIn: false,
//   permission: 'paid'  // paid | free
// }


// // 점(.) 표기법
// // authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log( authUser.uid );
// console.log( authUser.name );
// console.log( authUser.email );
// console.log( authUser.isSignIn ); // getter

// console.log( authUser.permission = 'free' ); // setter


// // 대괄호([]) 표기법
// // 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// // 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log( authUser['uid'] );
// console.log( authUser['name'] );
// console.log( authUser['email'] );
// console.log( authUser['isSignIn'] ); // getter
// console.log( authUser['permission'] = 'allPass' );



// Object.prototype.nickName = '호랑이';


// // 객체 안에 키가 있는지 확인 방법

// // in 문

// console.log( 'uid' in authUser );


// for(let key in authUser){
//   if({}.hasOwnProperty.call(authUser,key)){
//     console.log(authUser[key]);
//   }
// }


// //  객체의 key 만을 모아서 배열을 반환하는 메서드 Object.keys()
// const keyList = Object.keys(authUser);

// console.log( keyList );

// // 객체의 value 만을 모아서 배열을 반환하는 메서드 Object.values()

// const valueList = Object.values(authUser);

// console.log( valueList );



// function getPropertiesList(obj){
  
//   let result = [];

//   for(let key in obj){
//     if({}.hasOwnProperty.call(obj,key)){
//       result.push(obj[key]);
//     }
//   }
//   return result;
// }

// getPropertiesList(authUser) // ['uid', 'name', 'email', 'isSignIn', 'permission']


// console.clear()

// // 프로퍼티 제거(remove) or 삭제(delete)
// //         비워두기         메모리 날림


// // 객체가 맞는지 
// function removeProperty(obj,key){

//   if(isObject(obj)){
//     obj[key] = null;
//   }
// }

// removeProperty(authUser,'name') // authUser.name = null;





// function deleteProperty(obj,key){

//   if(isObject(obj)){
//     delete obj[key]
//   }

// }

// deleteProperty(authUser,'name') // undefined











// // 계산된 프로퍼티 (computed property)
// let calculateProperty = 'tel'; // phone | tel


// function createUser(name,age,phone){

//   return {
//     name:name,
//     age:age,
//     [calculateProperty]:phone
//   }
// }


// // authentication

// // 단축 프로퍼티
// let name = '선범';
// let email = 'seonbeom2@euid.dev';
// let authorization = 'Lv. 99';
// let isLogin = true;



// const student = { name, email, authorization, isLogin }



// // 프로퍼티 이름 제한
// // 예약어: class, if, switch, for, while, ...


// // 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// function isEmptyObject(obj) {
//   return Object.keys(obj).length === 0
// }


// isEmptyObject({}) // true



// /* ------------------------------------------- */
// /* 배열 구조 분해 할당  destructuring assignments   */
// /* ------------------------------------------- */

// // 순서(order)를 바꿀 수 없음. 변수명 o 

// const arr = [10,100,1000,10_000];


// const [a0,a2,a3,a4,a5 = 999] = arr; 

// // const a0 = arr[0];
// // const a1 = arr[1];
// // const a2 = arr[2];
// // const a3 = arr[3];


// for(let [key,value] of Object.entries(authUser)){
  
//   // console.log( key ,value );

// }



// // [ [key,value],[key,value] ]

// // 닌자 코드 

// // const [first,second] = document.querySelectorAll('span');





// // const first = spanList[0];
// // const second = spanList[1];


// // const first = document.querySelector('.first');
// // const second = document.querySelector('.second');







// /* -------------------------------------------- */
// /* 객체 구조 분해 할당  destructuring assignments    */
// /* --------------------------------------------- */

// // 순서를 고려하지 않음. key와 변수명이 동일해야 함. => 변수명 o 
// // 기본 값 사용 가능 
// const salaries = {
//   함정민:95,
//   지유진:110,
//   이진용:15,
//   한상학:300
// }


// const {함정민:함 = 100,지유진:지,한상학:한,이진용:리,장주원:장 = 500} = salaries;

// // const 이진용 = salaries.이진용;
// // const 지유진 = salaries.지유진;


// function sum(a){

//   return 1 + a
// }

// sum()



// function createUserObject({
//   name = '철수',
//   age,
//   gender,
//   job:j = '홈프로텍터'
// } = {}){

  
  
//   // const {name,age,gender,job} = obj;


//   return { name, age, gender, job:j }

// }


// const data = {
//   name:'beom',
//   age:40,
//   gender:'male',
//   job:'developer',
//   address:'서울시 중랑구',
//   tel:'010-716....'
// } 

// const person = createUserObject(data);




// const { 
//   userName, 
//   age, 
//   gender, 
//   job, 
//   address = '서울시 중랑구', 
//   tel
//  } = {
//   userName:'beom',
//   age:40,
//   gender:'male',
//   job:'developer',
//   address:'서울시 중랑구',
//   tel:'010-716....'
// }

// // const {acos} = Math;

// // const acos = Math.acos;
























