const INIT_STATE = {
  todos: [],
  textValue: "",
  editingIndex: null,
};

const todoReducer = (state = INIT_STATE, action) => {
  //console.log(action)
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case "UPDATE_TODOS":
      return {
        ...state,
        todos: action.todos,
      };
    case "SET_TEXT_VALUE":
      return {
        ...state,
        textValue: action.textValue,
      };
    case "SET_EDITING_STATE":
      return {
        ...state,
        editingIndex: action.editingIndex,
      };
    default:
      return state;
  }
};

export default todoReducer;
