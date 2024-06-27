/* global gsap */


import { 
  tiger,
  delayP,
  getNode,
  changeColor,
  clearContents,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
 } from "./lib/index.js";




const ENDPOINT = 'http://localhost:3000/users'



// 1. user 데이터 fetch 해주세요.
//    - tiger.get


// 2. fetch 데이터의 유저 이름만 콘솔 출력
//     - 데이터 유형 파악  ex) 객체,배열,숫자,문자
//     - 적당한 메서드 사용하기 

// 3. 유저 이름 화면에 렌더링 

const userCardInner = getNode('.user-card-inner');

async function renderUserList(){


  // 로딩 스피너 렌더링
  renderSpinner(userCardInner)
 
  // await delayP(2000);
  

  try{

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        this._targets[0].remove()
      }
    })
    // getNode('.loadingSpinner').remove()

    const response = await tiger.get(ENDPOINT);

    const data = response.data;
  
    data.forEach(user => renderUserCard(userCardInner,user))
  
    changeColor('.user-card');
  
    gsap.from('.user-card',{
      x:-100,
      opacity:0,
      stagger: {
        amount: 1,
        from:'start'
      }
    })
  
  }
  catch{
    console.error('에러가 발생했습니다!');
    renderEmptyCard(userCardInner)
  }
}

renderUserList()



function handleDeleteCard(e){
  const button = e.target.closest('button');

  if( !button ) return;

  const article = button.closest('article');
  const index = article.dataset.index.slice(5);

  tiger.delete(`${ENDPOINT}/${index}`)
  .then(()=>{
    
    // 요청 보내고 렌더링하기
    clearContents(userCardInner)
    renderUserList()

  })
}


userCardInner.addEventListener('click',handleDeleteCard)



































