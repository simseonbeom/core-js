
import { getNode } from '../dom/getNode.js';





function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}

const first = getNode('.first');
const second = getNode('.second');




// delay(()=>{ 
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(()=>{
//       first.style.top = '0px';
//       second.style.top = '0px';
//     })
//   })
//  })

const shouldRejected = false;

const p = new Promise((성공,실패)=>{
  if(!shouldRejected){

    성공('성공!!');

  }else{

    실패('실패!');
  }
});

 


function delayP(){


  return new Promise((resolve, reject) => {
    resolve('성공');
  })

}


delayP()
.then()
















