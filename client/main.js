




class Button extends HTMLElement {

  constructor(){
    super();

    this.button = document.querySelector('button');

  }

  connectedCallback(){
    this._render();
  }

  disconnectedCallback(){

  }

  static get observedAttributes(){
    return ['id'];
  }

  attributeChangedCallback(name,oldValue,newValue){
    if(oldValue !== newValue){
      this._render()
    }
  }

  _render(){
    this.button.textContent = this.id;
  }

}


customElements.define('c-button',Button);



const c = document.querySelector('c-button');

let count = 0;

c.addEventListener('click',()=>{
  c.setAttribute('id',++count)
})








