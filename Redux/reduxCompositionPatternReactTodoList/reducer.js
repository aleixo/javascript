var todosReducer = {};

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
todosReducer.todosApp = combineReducers({
    todos: todosReducer.todos,
    visibilityFilter: todosReducer.visibilityFilter
})

/*

Composition patter manual


todosReducer.todosApp = (
    state = {},
    action
) => {
    return  {
        todos: todosReducer.todos(
            state.todos,
            action
        ),
        visibilityFilter: todosReducer.visibilityFilter(
            state.visibilityFilter,
            action
        )
    }
}

*/
const store = createStore(todosReducer.todosApp);
const todoDispatcher = new TodoDispatcher(store);
const { Component } = React;

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.input = '';

        this.storeTodoName = this.storeTodoName.bind(this);        
        this.addTodo = this.addTodo.bind(this);

    }

    addTodo() {
        todoDispatcher.addTodo(this.input)
    } 

    storeTodoName(event) {
        this.input = event.target.value || ''
    }

    get inputItem(){
       return React.createElement('input', {onChange: this.storeTodoName});
    }

    get addTodoButton(){
        return React.createElement('button', {onClick: this.addTodo},'New todo');
    }
    
    get todosList() {        
        let lis = [];                        
        this.props.todos.forEach((todo) => {            
            lis.push(
                React.createElement('li', {
                    key: todo.id, 
                    onClick: () => todoDispatcher.toggleTodo(todo.id)
                }, todo.text)
            );
        });
        
        return React.createElement('ul',{}, ...lis);
    }

    render() {
        return (
                React.createElement('div',
                {},
                this.inputItem,
                this.addTodoButton,
                this.todosList            
            )
        )
    }
}

const render = () => {    
    const addComponent = React.createElement(TodoApp, {        
        todos: store.getState().todos
    })
    
    ReactDOM.render(
        addComponent,
        document.getElementById('root')
    )
}

store.subscribe(render);
render();