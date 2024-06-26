const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

//  [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete   => 성공 / 실패

const user = {
  name: 'tiger',
  age: 40,
  gender: 'male',
};


/* -------------------------------------------- */
/*               xhr callback 방식               */
/* -------------------------------------------- */

function xhr({
  method = 'GET',
  url = '',
  body = null,
  성공 = null,
  실패 = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}) {

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key,value)
  })

  

  xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        const data = JSON.parse(response);

        성공(data); // ???
      } else {
        실패('실패!');
      }
    }
  });

  xhr.send(JSON.stringify(body));

  
}

// 1. 무조건 매개변수 순서에 맞게 작성 ✅
// 2. 매개변수 안쓰면? ✅

// xhr({
//   성공(data) {
//     console.log(data);
//   },
//   실패() {},
//   url: ENDPOINT,
// });



xhr.get = (url,성공,실패) =>{
  xhr({ url, 성공, 실패 })
}
xhr.post = (url,body,성공,실패) =>{
  xhr({ 
    method:'POST',
    body,
    url, 
    성공, 
    실패
   })
}
xhr.put = (url,body,성공,실패) =>{
  xhr({ 
    method:'PUT',
    body,
    url, 
    성공, 
    실패
   })
}
xhr.delete = (url,성공,실패) =>{
  xhr({ 
    method:'DELETE',
    url, 
    성공, 
    실패
   })
}





// 





/* -------------------------------------------- */
/*               xhr Promise 방식               */
/* -------------------------------------------- */



function xhrPromise(method,url,body){

  const xhr = new XMLHttpRequest();
  
  xhr.open(method,url);

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    
    xhr.addEventListener('readystatechange',()=>{
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 400){
          resolve(JSON.parse(xhr.response));
        }
        else{
          reject({message:'알 수 없는 오류'});
        }
      }
    })
  })
}



xhrPromise('GET',ENDPOINT,{name:'tiger'})
.then((res)=>{
  console.log( res );
})























