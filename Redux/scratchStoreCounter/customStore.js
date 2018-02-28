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

const createStore = (reducer) => {
    let state;
    let listners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listners.forEach( (listner) => listner() );
    }

    const subscribe = (listner) => {
        listners.push(listner);
    }

    const unsubscribe = (listner) => {
        listners = listners.filter( l => l !== listner);
    };

    dispatch({});

    return {
        getState,
        dispatch,
        subscribe, 
        unsubscribe
    }
}

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
