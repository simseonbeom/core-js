import { getNode } from "./getNode.js";
import { isString } from "../utils/type.js";





export function clearContents(node){

  if(isString(node)) node = getNode(node);

  if(node.nodeName === 'INPUT' || node.nodeName === 'TEXTAREA') {
    node.value = ''
    return;
  }

  node.textContent = ''
  
}








