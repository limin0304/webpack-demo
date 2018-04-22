import { creatStore } from 'redux';
const store = creatStore(fn);
const state = store.getState();
const ADD_TODO = 'Add_TODO';
function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}
store.dispatch(addTodo('Learn Redux'));