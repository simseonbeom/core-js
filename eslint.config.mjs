import globals from "globals";
import pluginJs from "@eslint/js";


const ignore = {
  isString:true,
  isObject:true,
  isArray:true,
  isNull:true,
  getNode:true,
  insertLast:true,
  attr:true,
  css:true,
  bindEvent:true,
  addClass:true,
  removeClass:true,
}

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { 
      globals: {
        ...globals.browser, 
        ...globals.node,
        ...ignore,
      } 
    },
    
    rules:{
      "no-unused-vars":'warn'
    },
  },
];