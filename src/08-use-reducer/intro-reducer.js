const initialState = {
    id: 1,
    todo: 'Comprar pan',
    done: false
};

const todoReducer = (state = initialState, action = {}) => {
    if (action?.type === '[TODO] add todo') {
        state.push(action.payload);
    }  
    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
};

todos = todoReducer(todos, addTodoAction);

