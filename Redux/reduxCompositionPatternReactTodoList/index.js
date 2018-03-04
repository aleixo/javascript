const reducerActions = new TodoActions();
const reducer = new TodosReducer(reducerActions);

const appStore = reducer.newStore;

const dispatcher = new TodoDispatcher(appStore);

const render = () => {     
        const todos = reducer.getVisibleTodos(
        appStore.getState().todos,
        appStore.getState().visibilityFilter
    )
    const addComponent = React.createElement(TodosList, {        
        todos,
        dispatcher
    })
    
    ReactDOM.render(
        addComponent,        
        document.getElementById('root')
    )
}

appStore.subscribe(render);
render();