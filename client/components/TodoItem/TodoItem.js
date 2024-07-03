import { TodoService } from "../../service/TodoService.js";




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
    this.contentInput.value = value;
    this.checkbox.checked = checked;
    
    
    if(checked){
      this.contentInput.classList.add('done');
    }

  }

  connectedCallback(){

    gsap.from(this,{scale:0});

    const value = this.contentInput.value;

    this.contentInput.value = value ? value  : 'TASK' + this.id;

    this.deleteButton.addEventListener('click', ()=> this.deleteItem())
    this.checkbox.addEventListener('click', ()=> this.toggleChecked())
    this.contentInput.addEventListener('blur', ()=> this.updateItem())
    this.contentInput.addEventListener('keydown', (e)=> this.enterPress(e))

    TodoService.AddTodoItem(this.id,this.contentInput.value,this.checkbox.checked)
    this.saveData()

  }


  deleteItem(){

    gsap.to(this,{
      scale:0,
      callbackScope:this,
      onComplete(){
        TodoService.DeleteTodoItem(this.id)
        this.remove();
        this.saveData()
    }})
    
  }

  toggleChecked(){
    if(this.checkbox.checked){
      this.contentInput.classList.add('done');
    }else{
      this.contentInput.classList.remove('done');
    }

    TodoService.CheckTodoItem(this.id,this.checkbox.checked)
    this.saveData()
    
  }

  updateItem(){
    TodoService.UpdateTodoItem(this.id,this.contentInput.value)
    this.saveData()
  }

  enterPress({keyCode}){

    if(keyCode === 13){
      
      if(this.nextElementSibling !== null){
        const next = this.nextElementSibling.shadowRoot.querySelector('input[type="text"]');

        this.contentInput.blur();
        next.focus();
      }
      else{
        this.contentInput.blur();
      }
      
    }

  }

  saveData(){
    localStorage.setItem('todo',JSON.stringify(TodoService.state));
  }

}















