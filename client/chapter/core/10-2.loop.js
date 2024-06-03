/* -------------------- */
/* Do While Loop        */
/* -------------------- */




// let i = 0;

// do{

//   console.log(i);

//   if(i === 3){
//     console.log('3번 입니다.');
//   }
  
//   i++

// }while(i < 5)







// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단


// let result = prompt('몇 번??');

// do{
//   console.log('최초 실행된 메시지입니다.');
  
//   if(result < 0){
//     break;
//   }
//   result--;
// }while(result >= 0)




// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정


// let count = 0;

// do{
//   console.log(count++);

// }while(result--)






// let first = document.querySelector('.first');



// do{
  
//   first = first.nextSibling;

// }while(first.nodeType !== 1)


  

  const first = document.querySelector('.first');

  

  function next(node){

    if(typeof node === 'string') node = document.querySelector(node)

    // validation -> 확인

    do{

      node = node.nextSibling;

    }while(node.nodeType !== 1)

    return node

  }
  

  const second = next('.first') // .second



  function prev(node){

    if(typeof node ==='string'){
      node = document.querySelector(node);
    }

    do{
      
      node = node.previousSibling;

    }while(node.nodeType !== 1)

    return node

  }

  const prevoius = prev('.second') // .first




// second

// first의 다음 요소 선택 => .second




















