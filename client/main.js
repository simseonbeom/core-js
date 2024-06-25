

import { 
  getNodes,
  diceAnimation,
 } from "./lib/index.js";


// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록




const [rollingButton,recordButton,resetButton] = getNodes('.buttonGroup > button');






const handleRollingDice = (() => {

  
  let isClicked = false;
  let stopAnimation;

  return ()=>{
    if(!isClicked){
      console.log('클릭 첫 번째');
      stopAnimation  = setInterval(diceAnimation, 100);
  
    }
    else{
      console.log('클릭 두 번째');
      clearInterval(stopAnimation)
    }
    isClicked = !isClicked;
  }
})()



rollingButton.addEventListener('click',handleRollingDice)










