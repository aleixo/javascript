class TodoDispatcher {
    constructor(todosAppStore) {
        this.store = todosAppStore;
        this.nextTodoId = 0;             
    }

    addTodo(todoText) {      
        this.store.dispatch({
            type: 'ADD_TODO',
            text: todoText  || '',
            id: this.nextTodoId++
        });        
    }

    toggleTodo(todoId) {                
        this.store.dispatch({
            type: 'TOGGLE_TODO',            
            id: todoId
        });
    }

    toggleVisibilityFilter(filter) {        
        this.store.dispatch({
            type: 'SET_VISIBILITY_FILTER',            
            filter
        });
    }
}
