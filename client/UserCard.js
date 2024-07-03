




class UserCard extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.innerHTML = `
      <button type="button">btn</button>
    `
    this.button = this.shadowRoot.querySelector('button');
  }

  connectedCallback(){

    this.button.addEventListener('click',()=> this.clickMe() )

  }

  clickMe(){
    console.log(this);
  }

}


customElements.define('user-card',UserCard);



// console.log( document.querySelector('user-card').shadowRoot.querySelector('button') );




// function sum(){
//   console.log(this);
// }


// sum() // undefined
// sum.call({}) // {} => 실행
// sum.apply({}) // {} => 실행
// const n = sum.bind({}) // {} => 실행 x 

// n()






















