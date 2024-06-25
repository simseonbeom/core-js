import data from './data/data.js';
import { 
  getNode, 
  addClass,
  showAlert,
  getRandom, 
  insertLast, 
  removeClass,
  clearContents,
  isNumericString,
 } from './lib/index.js';

// [phase-1]
// 1. 주접 떨기 버튼을 클릭 하는 함수
//    - 주접 떨기 버튼 가져오기
//    - 이벤트 연결하기 addEventListener('click')

// 2. input 값 가져오기
//    - input.value

// 3. data함수에서 주접 1개 꺼내기
//    - data(name)
//    - getRandom()

// 4. pick 항목 랜더링하기

// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리 (콘솔 출력)

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');



const tween = gsap.to('#nameField',{
  duration:0.1,
  x:-10,
  repeat:5,
  yoyo:true,
})

function handleSubmit(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];


  if (!name || name.replace(/\s*/g,'') === '') {
    
    showAlert('.alert-error','공백은 허용하지 않습니다.')
    

    tween.play()

    
    console.log( 
      

    );
    


    return;
  }


  
  if(!isNumericString(name)){
    
    showAlert('.alert-error','제대로된 이름을 입력해 주세요.');



    return;
  }





  clearContents(result);
  insertLast(result, pick);
}

submit.addEventListener('click', handleSubmit);






