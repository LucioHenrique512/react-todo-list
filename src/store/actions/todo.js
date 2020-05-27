export const addTodo = (text) => ({
  type: "ADD_TODO",
  todo: { text, createdAt: new Date() },
});

export const setTextValue = (text) => ({
  type: "SET_TEXT_VALUE",
  textValue: text,
});

export const editingState = (todoIndex) => ({
  type: "SET_EDITING_STATE",
  editingIndex: todoIndex,
});

export const updateTodos = (todosArray) => ({
  type: "UPDATE_TODOS",
  todos: todosArray,
});
