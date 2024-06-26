

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users'


// fetch  => promise

const tiger = async (url) => {

  const response = await fetch(url) ;

  if(response.ok){
    response.data = await response.json();
  }

  return response;
}


const result = await tiger(ENDPOINT);

console.log( result.data );


// IIAFE

// (async function(){



  
  

// })()

























