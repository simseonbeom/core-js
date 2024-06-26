import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js'

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
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

const shouldRejected = true;

// const p = new Promise((성공, 실패) => {
//   if (!shouldRejected) {
//     성공('성공!!');
//   } else {
//     실패('실패!');
//   }
// });

// 객체 합성
const defaultOptions = {
  shouldRejected:false,
  data:'성공',
  errorMessage:'알 수 없는 오류',
  timeout:1000
}

function delayP(options) {

  let config = {...defaultOptions}

  if(isNumber(options)){
    config.timeout = options
  }
  
  if(isObject(options)){
    config = {...defaultOptions,...options}
  }
  
  const {shouldRejected,data,errorMessage,timeout} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({message:errorMessage});
      }
    }, timeout);
  });
}



// delayP({timeout:5000})

delayP(5000)


















  
