




class Button extends HTMLElement {

  constructor(){
    super();

    // c-button의 쉐도우 돔을 열어줘.
    this.attachShadow({mode:'open'});

    // 그리고 그 안에(shadowRoot) 내가 원하는 태그 집어 넣을거야 
    this.shadowRoot.innerHTML = `
      <button>hello</button>
    `
  }

  connectedCallback(){

  }

  disconnectedCallback(){

  }

}



customElements.define('c-button',Button);


console.log( document.querySelector('c-button').shadowRoot.querySelector('button') );





























