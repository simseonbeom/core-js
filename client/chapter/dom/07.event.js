/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler(){
  console.log('클릭 이벤트 발생!!!');
}

// 2. DOM 프로퍼티 : element.onclick = handler
const first = getNode('.first');
first.onclick = handler;



// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener