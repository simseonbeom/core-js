/* ------------------------------------ */
/* HTML Attributes vs. DOM Properties   */
/* ------------------------------------ */


/* HTML 속성 ------------------------------------------------------------- */

// 브라우저는 HTML 태그를 해석해 DOM 객체를 만들 때 HTML 표준 속성을 인식하고, 
// 이 표준 속성을 사용해 DOM 프로퍼티를 생성합니다. 표준 속성이 아닌 경우, 
// 이에 매핑하는 DOM 프로퍼티가 생성되지 않습니다.
// HTML 속성 값은 항상 문자열입니다.


/* DOM 프로퍼티 ----------------------------------------------------------- */

// DOM 노드(DOM node)는 JavaScript 객체입니다.
// DOM 프로퍼티와 메서드는 일반 JavaScript 객체처럼 행동하므로 아래와 같은 특징을 보입니다.
// - 어떤 값이든 가질 수 있습니다.
// - 대·소문자를 구분하므로 `elem.nodeType`이 아닌, `elem.NoDeTyPe`는 동작하지 않습니다.
// - DOM 프로퍼티는 HTML 속성과 달리 값이 항상 문자열이 아닙니다.


/* DOM 프로퍼티 검토 ------------------------------------------------------- */

// - elementNode.hasAttribute(name) – 속성 존재 여부 확인

const first = getNode('.first');

console.log( first.hasAttribute('id') );


// - elementNode.getAttribute(name) – 속성값을 가져옴
console.log( first.getAttribute('data-value') );


// - elementNode.setAttribute(name, value) – 속성값을 변경함
first.setAttribute('id','tiger')

// - elementNode.removeAttribute(name) – 속성값을 지움
first.removeAttribute('id')

// - elementNode.attributes – 열거 가능한(iterable) 속성 집합을 반환함
console.log( first.attributes );
// [Symbol.iterator]().next().value 

/* 비표준 속성, 프로퍼티 설정 ------------------------------------------------- */

// data-* 속성은 커스텀 데이터를 안전하고 유효하게 전달해줍니다.
// data-* 속성을 사용하면 읽기 쉽고, 수정도 손쉽습니다.

// - elementNode.dataset


first.dataset.name = 'seonbeom' // setter
console.log( first.dataset.value );

console.log( first.getAttribute('data-name') );

// first.removeAttribute('sayHi')
// first.setAttribute('class','')






























