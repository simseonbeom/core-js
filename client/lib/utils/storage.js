
import { isString } from './type.js'



console.log('storage');

const {localStorage:storage} = window;

const user = {
  name:'tiger',
  age:40,
  gender: 'male',
  email:'tiger@naver.com'
}

// localStorage.setItem('user',JSON.stringify(user))


function setStorage(key,value){
  
  return new Promise((resolve, reject) => {
    if(isString(key)){
      storage.setItem(key,JSON.stringify(value));
      resolve()
    }else{
      reject()
    }
  })
}


function getStorage(key){

  return new Promise((resolve, reject) => {
    if(isString(key))  {
      resolve(JSON.parse(storage.getItem(key)))
    }else{
      reject()
    }
  })
}












// getStorage('user')



















