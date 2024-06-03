/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 100;

switch(a){
  case 10 :
    console.log('10입니다!');
    break;

  case 11 :
    console.log('11입니다!');
    break;

  case 12 :
    console.log('12입니다!');
    break;

  default :
    console.log('10, 11, 12가 없습니다.');
}






const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = MORNING;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

switch(thisTime){
  case MORNING :
    console.log('디스코드를 켠다.');
    break;

  case LUNCH :
    console.log('체력 보충을 위한 잠을 잔다.');
    break;

  case DINNER :
    console.log('수업 내용을 복습한다.');
    break;

  case NIGHT :
    console.log('내일 수업을 예습한다.');
    break;

  case LATE_NIGHT :
  case DAWN :
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

















/* switch문 → if문 변환 --------------------------------------------------- */


/* switch vs. if -------------------------------------------------------- */

