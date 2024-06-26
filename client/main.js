


import { xhrPromise } from "./lib/index.js";



// await 병
// Promise 객체 


 const getData = async () => {

  const data = await xhrPromise.get('https://jsonplaceholder.typicode.com/users')


  console.log( data );


}


// getData()




















