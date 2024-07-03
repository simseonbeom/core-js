


const TodoItemTemplate = document.createElement('template');

TodoItemTemplate.innerHTML = `
  <style>@import url('./components/TodoItem/TodoItem.css');</style>
  <li class="item">
    <input type="checkbox" />
    <div class="content">
      <input type="text" />
    </div>
    <button type="button" class="delete-item">x</button>
  </li>
`

export class TodoItem extends HTMLElement{

  constructor(id,value,checked){
    super();
    this.attachShadow({mode:'open'});
    this.shadowRoot.appendChild(TodoItemTemplate.content.cloneNode(true));
    this.item = this.shadowRoot.querySelector('.item');
    this.checkbox = this.item.querySelector('input[type="checkbox"]');
    this.contentInput = this.item.querySelector('input[type="text"]');
    this.deleteButton = this.item.querySelector('.delete-item');



    

    this.id = id;
    // this
    // input.value 
    // checkbox
    console.log(id, value, checked);

  }

  connectedCallback(){

  }
}















