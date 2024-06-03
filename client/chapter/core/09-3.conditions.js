/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 100;

switch (a) {
  case 10:
    console.log('10입니다!');
    break;

  case 11:
    console.log('11입니다!');
    break;

  case 12:
    console.log('12입니다!');
    break;

  default:
    console.log('10, 11, 12가 없습니다.');
}

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = MORNING;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch (thisTime) {
  case MORNING:
    console.log('디스코드를 켠다.');
    break;

  case LUNCH:
    console.log('체력 보충을 위한 잠을 잔다.');
    break;

  case DINNER:
    console.log('수업 내용을 복습한다.');
    break;

  case NIGHT:
    console.log('내일 수업을 예습한다.');
    break;

  case LATE_NIGHT:
  case DAWN:
    console.log('꿈속에서 배웠던 코드를 생각한다.');
    break;
}

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

// if
// else if

if (thisTime === MORNING) {
  console.log('디스코드를 켠다.');
} else if (thisTime === LUNCH) {
  console.log('체력 보충을 위한 잠을 잔다.');
} else if (thisTime === DINNER) {
  console.log('수업 내용을 복습하세요.');
} else if (thisTime === NIGHT) {
  console.log('내일 수업을 예습하세요.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('꿈속에서 배웠던 코드를 만듭니다.');
}

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */

// 1. 변수에 담는다 => prompt를 통해서 숫자를 입력 받는다. (0~6까지)

// 2. switch case 문을 사용해서

// 0 : 일
// 1 : 월
// 2 : 화
// 3 : 수
// 4 : 목
// 5 : 금
// 6 : 토

// const value = +prompt('0~6까지의 숫자를 입력해주세요.');

// 함수는 하나의 기능만을 수행하는 것 

// Separation of concerns  (관심사의 분리)
//          매개변수 parameter
function getRandom(n){
  const value = Math.floor(Math.random() * n);
  return value;
}

// const number = getRandom(7);

function getDay(value){

  switch (value) {
    case 0: console.log('일'); break;
    case 1: console.log('월'); break;
    case 2: console.log('화'); break;
    case 3: console.log('수'); break;
    case 4: console.log('목'); break;
    case 5: console.log('금'); break;
    case 6: console.log('토'); break;
  }
}


// 3. 0~6까지 랜덤수를 받아서



function weekend(){
  // getDay 실행해서 요일을 받아옴  일 ~ 월

  // 해당 요일을 가지고 토,일 => 주말입니다.
  
  // if.. switch.. 삼항식

  // 평일입니다.

}























