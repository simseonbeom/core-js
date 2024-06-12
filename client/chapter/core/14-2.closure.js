

/* normal function */
// function earth(){
 
//   let water = true;
//   let gravity = 10;
  
//   return function(value){
//     gravity = value;
    
//     return [water,gravity]
//   }
// }

/* arrow function */
const earth = () => {
 
  let water = true;
  let gravity = 10;
  
  return  (value) => {
    gravity = value;

    return [water,gravity]
  }
}


const ufo = earth()

ufo(-10)






const button = document.querySelector('button');




/* normal function */
// function handleClick(){

//   let isClicked = false;

  
//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{
  
//       document.body.style.background = 'white'
//     }
  
//     isClicked = !isClicked;
//   }

//   return inner;
// }

// IIFE
/* arrow function */
const handleClick = (() => {

  let isClicked = false;
  
  return () => {
    if(!isClicked){

      document.body.style.background = 'orange'
    }else{
  
      document.body.style.background = 'white'
    }
  
    isClicked = !isClicked;
  }

})()


button.addEventListener('click',handleClick)



// 함수는 값 => 어디든 들어갈 수 있습니다. 

// 함수 표현식 



function useState(init){
  let value = init;

  function read(){
    return value;
  }

  function write(newValue){
    value = newValue;
  }

  return [read,write];
}

const [getNumber,setNumber] = useState(10);







// const getter = result[0]
// const setter = result[1]








































































