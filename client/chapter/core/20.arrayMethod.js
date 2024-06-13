/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray


// function isArray(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
// }

// function typeOf(data){
//   return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
// }



const people = [
  {
    id:0,
    name:'안재명',
    age:25,
    job:'물음표살인마',
    imgSrc:'aszfkq',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:1,
    name:'황선우',
    age:51,
    job:'요식업 사장님',
    imgSrc:'zvkkrq',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:2,
    name:'유진',
    job:'디스코드 봇',
    age:12,
    imgSrc:'gkzqg',
    imgAlt:'대체 텍스트입니다.'
  },
  {
    id:3,
    name:'김한울',
    job:'비둘기',
    age:39,
    imgSrc:'glzqoe',
    imgAlt:'대체 텍스트입니다.'
  }
]



/* 요소 순환 ---------------------------- */

// forEach

people.forEach((user)=>{
  console.log( user.job );
})


const span = document.querySelectorAll('span');



span.forEach((tag)=>{
  tag.addEventListener('click',function(){
    this.style.color = 'dodgerblue'
  })
})


// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');



// first.addEventListener('click',()=>{
//   console.log('first를 클릭하셨습니다.');
// })

// second.addEventListener('click',()=>{
//   console.log('second를 클릭하셨습니다.');
// })

// third.addEventListener('click',()=>{
//   console.log('third를 클릭하셨습니다.');
// })

// 

// event delegation (이벤트 위임)

/* 원형 파괴 ----------------------------- */

// push
// people.push('admin')

// pop
// people.pop()

// unshift

// shift


// reverse
const arr = [...people];
arr.reverse()

// console.log(arr);

// splice

// people.splice(0,2,'안녕','잘가')

// sort

function compare({age:a},{age:b}){

  if(a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if(a == b) return 0; // 두 값이 같은 경우 
  if(a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

// people.sort(compare)


/* 새로운 배열 반환 ------------------------ */

// concat
// toSpliced

const toSpliced = people.toSpliced(0,2)


// toSorted
const toSorted = people.toSorted(compare)


// toReversed

const toReversed = people.toReversed();


// map

// 이름만 담은 배열 반환 

// const nameList = people.map((user)=>{
//   return user.name
// })

const nameList = people.map(u => u.name)


// 현재 나이에 + 2 배열 반환

// const age = people.map((user)=>{
//   return user.age + 2
// })

const age = people.map(u => u.age + 2);

const cardTag = people.map(({name,age,job,imgSrc,imgAlt})=>{
  
  let template = /* html */`
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}.jpg" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `
  return template;
})

const ul = document.querySelector('ul');

cardTag.forEach(tag => ul.insertAdjacentHTML('beforeend',tag))



/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join