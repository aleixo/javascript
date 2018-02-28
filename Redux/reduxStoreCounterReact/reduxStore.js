//https://reactjs.org/docs/react-without-es6.html
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

const dispatchDecrement = () => {    
    store.dispatch({
        type: states.DECREMENT
    });
}

const dispatchIncrement = () => {    
    store.dispatch({
        type: states.INCREMENT
    });
}


const Counter = React.createClass({
    
    title: function() {
        return React.createElement('h1', null, `COUNTER - ${this.props.value}`,'');
    },

    buttonPlus: function() {
        return React.createElement(
            'button', 
            {onClick: this.props.onIncrement},
            ' + '
        )
    },
    buttonMinus: function() {
        return React.createElement(
            'button', 
            {onClick: this.props.onDecrement},
            ' - '
        )
    },
    render: function() {
        return React.createElement(
            'div',
            {},
            this.title(),
            this.buttonPlus(),
            this.buttonMinus()            
        );
    }
});

const render = () => {        
    const component = React.createElement(
        Counter, {
            value: store.getState(),
            onIncrement: dispatchIncrement,
            onDecrement: dispatchDecrement
        }
    )

    ReactDOM.render(
        component,       
        document.getElementById('root')                
    )
}

render();
store.subscribe(render);
