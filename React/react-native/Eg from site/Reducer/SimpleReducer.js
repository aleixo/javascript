import { createStore } from 'redux';

class SimpleReducer {

    constructor() {
        const store = createStore(this.counter);
        store.dispatch({
            type: 'INCREMENT'
        });

        store.subscribe(() => {
            console.log('CHANGED STATE ', store.getState());
        })
    }

    counter(state = 0, action) {
        const types = {
            INCREMENT : state + 1,
            DECREMENT : state - 1
        };

        return types[action];
    }
}

export default SimpleReducer;