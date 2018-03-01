/**
 * Returns one new todo
 * @param {object} One array with the previous states
 * @param {object} action The action beeing dispatched
 */
const newTodo = (previousState, action) => {
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
const toggleTodo = (previousState, action) => {
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

const todosReducer = {};

/**
 * The reducer for the todos, where we update the application state
 * @param {object} state Onew array with all the todos representing the desired state
 * @param {object} action THe action to be preformed
 */
todosReducer.todos = (state = [], action) => {
    let newState = state;

    const typesMapping = {
        ADD_TODO: newTodo(state, action),
        TOGGLE_TODO: toggleTodo(state, action)
    }
    
    if(Object.prototype.hasOwnProperty.call(typesMapping, action.type)) {
        newState = typesMapping[action.type];
    }        
    return newState;
}

todosReducer.visibilityFilter = (
    state = 'SHOW_ALL',
    action
 ) => {
     const actionMapping = {
         SET_VISIBILITY_FILTER: action.filter
     }

     if (Object.prototype.hasOwnProperty.call(actionMapping, action.type)) {         
         return actionMapping[action.type];
     }     
     return state;

}


const { combineReducers, createStore } = Redux;

todosReducer.todosAppCombinedReducer = combineReducers({
    todos: todosReducer.todos,
    visibilityFilter: todosReducer.visibilityFilter
})

var todosAppStore = createStore(todosReducer.todosAppCombinedReducer);