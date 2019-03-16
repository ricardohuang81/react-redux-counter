const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === "ADD_COUNTER") {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};


// Store
const store = createStore(rootReducer);
console.log('[Store store.getState()]', store.getState());


// Subscription
store.subscribe(() => {
    console.log('[Subscription store.getState()]', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log('[Dispatch store.getState()] again', store.getState());