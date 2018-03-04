const reducerActions = new TodoActions();
const reducer = new TodosReducer(reducerActions);
const appStore = reducer.newStore;
const dispatcher = new TodoDispatcher(appStore);
const renderingElementId = 'root';

const render = () => {         
    const visibilityFilter = appStore.getState().visibilityFilter;
    const todos = reducer.getVisibleTodos(
        appStore.getState().todos,
        visibilityFilter
    )    

    const addComponent = React.createElement(TodosContainer, {        
        todos,
        visibilityFilter,
        dispatcher,
        store: appStore
    })
    
    ReactDOM.render(
        addComponent,        
        document.getElementById(renderingElementId)
    )
}

appStore.subscribe(render);
render();