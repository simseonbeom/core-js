/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// default parameter 







getNode('.list') // [li,li]

// 1. id가 visual-section인 section 태그 요소
const section = document.querySelector('#visual-section');


// 2. class가 list인 ul 태그 요소
const list = section.querySelector('.list');


// 3. list 요소 안에 about 텍스트를 가진 li 태그 요소
const about = list.querySelector('li:nth-child(2)');


const aboutLi = [...list.children].find((li)=>{
  return li.textContent === 'about';
})

// const aboutLi = [...list.children].find(li => li.textContent === 'about')




// 4. name 속성이 search-box인 form 태그 요소
const form = document.querySelector('form[name="search-box"]');


// 5. form 요소 안에 있는 모든 자식 요소 
const children = form.children
// const children = form.querySelectorAll('*')


// 6. form 요소 안에 있는 input 태그 요소 
// const input = form.lastElementChild;
const input = children[children.length -1];
















/* 문서 대상 확인 */
// - matches
// - contains