class TodoDispatcher {
    constructor() {
        this.store = store;    
        this.nextTodoId = 0;
    }

    addTodo(todoText) {     
        console.log('NEW TODO', todoText)          
        this.store.dispatch({
            type: 'ADD_TODO',
            text: todoText  || '',
            id: this.nextTodoId++
        });        
    }

    toggleTodo(todoId) {        
        this.store.dispatch({
            type: 'TOGGLE TODO',            
            id: this.todoId
        });
    }
}
