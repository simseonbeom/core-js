

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}


// fetch  => promise

export const tiger = async (options) => {

  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }
  const response = await fetch(url,restOptions);

  if(response.ok){
    response.data = await response.json();
  }

  return response;
}



// const result = await tiger.get(ENDPOINT);

// console.log( result );




tiger.get = (url,options) => {
  return tiger({
    url,
    ...options
  })
}


tiger.post = (url,body,options) => {
   return tiger({
    method:'POST',
    url,
    ...options,
    body:JSON.stringify(body)
   })
}


tiger.delete = (url,options) => {
  return tiger({
    method:'DELETE',
    url,
    ...options
  })
}


tiger.put = (url,body,options) => {
  return tiger({
    method:'PUT',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}


tiger.patch = (url,body,options) => {
  return tiger({
    method:'PATCH',
    url,
    ...options,
    body:JSON.stringify(body)
  })
}





// IIAFE

// (async function(){



  
  

// })()

























