const states = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
}

const counter = (state = 0, action) => {    
    const actionType = {
        INCREMENT:  state + 1,  
        DECREMENT: state - 1
    }
    
    if(Object.prototype.hasOwnProperty.call(actionType, action.type)) {        
        return actionType[action.type];
    }
    return state;
}

const { createStore } = Redux;
const store = createStore(counter);

const render = () => {
    document.body.innerText = store.getState();
}

const dispatchIncrement = () => {
    store.dispatch({
        type: states.INCREMENT
    });
}




render();
store.subscribe(render);
document.addEventListener('click', dispatchIncrement);
