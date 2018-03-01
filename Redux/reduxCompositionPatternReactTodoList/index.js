const todoDispatcher = new TodoDispatcher(todosAppStore);

const renderTodos = () => {    
    const addComponent = React.createElement(TodoApp, {        
        todos: todosAppStore.getState().todos
    })
    
    ReactDOM.render(
        addComponent,
        document.getElementById('root')
    )
}

todosAppStore.subscribe(renderTodos);
renderTodos();