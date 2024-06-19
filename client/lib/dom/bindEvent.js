



function bindEvent(node,type,handler){
  
  if(isString(node)) node = getNode(node);

  node.addEventListener(type,handler);

  return () => node.removeEventListener(type,handler);

}



