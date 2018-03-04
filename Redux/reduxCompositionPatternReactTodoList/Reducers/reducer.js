class TodosReducer {
    constructor(reducerActions) {        
        this.actions = reducerActions;           
    }

    getVisibleTodos(todos, filter) {
        let newState = todos;    

        const visifilityMapper = {
            SHOW_ALL: () => todos,
            SHOW_COMPLETED: () => todos.filter( todo => todo.completed),
            SHOW_ACTIVE: () => todos.filter( todo => !todo.completed)
        }
    
        if(Object.prototype.hasOwnProperty.call(visifilityMapper, filter)) {
            newState = visifilityMapper[filter]();
        }
            
        return newState;
    }

    /**
     * The reducer for the todos, where we update the application state
     * @param {object} state Onew array with all the todos representing the desired state
     * @param {object} action THe action to be preformed
     */
    todos(state = [], action) {
        let newState = state;                

        const typesMapping = {
            ADD_TODO: () => this.actions.newTodo(state,action),
            TOGGLE_TODO: () => this.actions.toggleTodo(state,action)
        }
        
        if(Object.prototype.hasOwnProperty.call(typesMapping, action.type)) {
            newState = typesMapping[action.type]()
        }        
        return newState;
    }

    visibilityFilter(state = 'SHOW_ALL',action) {        
         const actionMapping = {
             SET_VISIBILITY_FILTER: () => action.filter
         }
    
         if (Object.prototype.hasOwnProperty.call(actionMapping, action.type)) {         
             return actionMapping[action.type]();
         }     
         return state;
    
    }    

    get newStore() {        
        const { combineReducers, createStore } = Redux;
        const combinedReducer = combineReducers({
            todos: this.todos.bind(this),
            visibilityFilter: this.visibilityFilter.bind(this)
        });
        const store = createStore(combinedReducer);        
        return store;
    }
}


