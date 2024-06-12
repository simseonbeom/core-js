

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























