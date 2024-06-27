


import { 
  getNode,
  getStorage,
  setStorage,
  deleteStorage,
  clearContents,
 } from "./lib/index.js";



 const textField = getNode('#textField');
 const clear = getNode('button[data-name="clear"]');


 getStorage('text')
 .then((res)=>{
   textField.value = res;
 })

 function handleTextField(){

  const value = this.value;

  setStorage('text',value);


 }

 function handleClear(){
  deleteStorage('text');
  clearContents(textField);
 }

 textField.addEventListener('input',handleTextField);
 clear.addEventListener('click',handleClear);











