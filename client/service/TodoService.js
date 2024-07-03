




export class TodoService {

  static state = [];

  static initializeState(state){
    this.state = state;
  }

  static AddTodoItem(id,value,checked){
    this.state.push({id,value,checked});
    console.log(...this.state);
  }

  static DeleteTodoItem(id){

    this.state = this.state.filter(t => t.id !== id);
    console.log(...this.state);
    
  }

  static CheckTodoItem(id,checked){
    const t = this.state.find( t => t.id === id);
    t.checked = checked;
    console.log(...this.state);
  }

  static UpdateTodoItem(id,value){
    const t = this.state.find( t => t.id === id);
    t.value = value;
    console.log(...this.state);
  }

}























