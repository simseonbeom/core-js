
import { isString } from './type.js'



const {localStorage:storage} = window;

export function setStorage(key,value){
  return new Promise((resolve, reject) => {
    if(isString(key)){
      storage.setItem(key,JSON.stringify(value));
      resolve()
    }else{
      reject()
    }
  })
}

export function getStorage(key){
  return new Promise((resolve, reject) => {
    if(isString(key))  {
      resolve(JSON.parse(storage.getItem(key)))
    }else{
      reject()
    }
  })
}

export function deleteStorage(key){

  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve()
  })

}




















