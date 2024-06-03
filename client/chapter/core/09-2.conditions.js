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


console.clear()

function sayHi(){
  return 'hello'
}

function login(){

  let userName = prompt('누구세요?');

  let say = sayHi();
  
  // userName이 null, undefined => 아래 코드 실행 안함.
  
  if(userName === null || undefined) return;

  if(userName.toLowerCase() === 'admin'){
    let password = prompt('비밀번호는?');

    if(password.toLowerCase() === 'themaster'){
      console.log(`환영합니다~~!!${say}`);

    }else if(password === null){
      console.log('취소!');

    }else{
      console.log('비밀번호를 잘못 입력하셨습니다.');
      login()
    }
  }
  else if(userName === null || userName.replace(/\s*/g,'') === ''){
    console.log('취소!');
  }
  else{
    console.log('실패!');
  }

}




login()







































