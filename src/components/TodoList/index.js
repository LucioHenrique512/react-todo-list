import React, { useEffect } from "react";
import { Container, List, EmptyContainer } from "./style";
import TodoCard from "../TodoCard";
import { connect } from "react-redux";
import {
  setTextValue,
  editingState,
  updateTodos,
} from "../../store/actions/todo";
import { deleteTodoInArray } from "../../utils/todo";

const TodoList = ({ state: { todo }, dispatch }) => {
  const { todos } = todo;
  useEffect(() => {
    document.title = `${todos.length} todos ${
      todos.length === 0 ? "😕" : "🙂"
    }`;
  }, [todos]);

  const handleEdit = (index) => {
    dispatch(editingState(index));
    dispatch(setTextValue(todos[index].text));
  };

  const handleDelete = (index) => {
    //console.log(deleteTodoInArray(todos,index))
    dispatch(updateTodos(deleteTodoInArray(todos, index)));
  };

  return (
    <Container>
      {todos.length === 0 ? (
        <EmptyContainer>
          Nothing to see here.
          <span role="img" aria-label="sheep">
            😐
          </span>
        </EmptyContainer>
      ) : (
        <List>
          {todos.map((todo, i) => (
            <TodoCard
              key={i}
              index={i}
              text={todo.text}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </List>
      )}
    </Container>
  );
};

export default connect((state) => ({ state }))(TodoList);
