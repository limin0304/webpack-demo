const defaultState = 0;
const reducer = function (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.payload;
        default:
            return state;
    }
};
const state = reducer(1, {
    type: 'ADD',
    payload: 2
});