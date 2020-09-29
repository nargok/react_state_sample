const add_todo = "add_todo";
const complete_task = "complete_task";

export const addTodo = (payload) => ({
  type: add_todo,
  payload,
});

export const completedTask = (payload) => ({
  type: complete_task,
  payload,
});

const initialState = { todos: [] };

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_todo:
      const newTodos = [...state.todos];
      newTodos.push({ id: state.todos.length + 1, task: action.payload });
      return {
        ...state,
        todos: newTodos,
      };
    case complete_task:
      const filteredTodos = [...state.todos];
      filteredTodos.splice(action.payload, 1);
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
};
