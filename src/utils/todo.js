export const editTodoArray = (todoArray, selectedIndex, newText) =>
  todoArray.map((todo, index) =>
    index === selectedIndex
      ? { text: newText, createdAt: todo.createdAt }
      : todo
  );

export const deleteTodoInArray = (todoArray, selectedIndex) =>
  todoArray.filter((todo, index) => index !== selectedIndex);
