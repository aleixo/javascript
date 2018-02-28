const toggleTodo = (todo) => {
    //return todo.completed = !todo.completed; mutates object
    /**
     *return Object.assign({}, todo,{
        completed: !todo.completed
    });
     */
    
     return {
         ...todo, completed: !todo.completed
     }
}

const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'toggle me',
        completed: false
    }

    const todoAfter = {
        id: 0,
        text: 'toggle me',
        completed: true
    }

deepFreeze(todoBefore);

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter)
}

testToggleTodo();
console.log('All tests passed');