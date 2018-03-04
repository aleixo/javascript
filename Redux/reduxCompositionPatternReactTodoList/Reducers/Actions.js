class TodoActions {
    /**
     * Returns one new todo
     * @param {object} One array with the previous states
     * @param {object} action The action beeing dispatched
     */
    newTodo(previousState, action) {
        return [
            ...previousState,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
    }

    /**
     * Returns one toggled todo
     * @param {object} One array with the previous states
     * @param {object} action The action beeing dispatched
     */
    toggleTodo(previousState, action) {        
        return previousState.map( todo => {
            if (todo.id !== action.id) {            
                return todo;
            }
            return {
                ...todo,
                completed: !todo.completed
            }
        });
    }
}