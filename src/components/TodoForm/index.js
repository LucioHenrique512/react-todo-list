import React from "react";
import { Container } from "./style";
import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { editTodoArray } from "../../utils/todo";
import {
  setTextValue,
  editingState,
  addTodo,
  updateTodos,
} from "../../store/actions/todo";

const TodoForm = ({ dispatch, state: { todo } }) => {
  //const [textValue, setTextValue] = useState("");
  const { textValue, editingIndex, todos } = todo;
  // console.log(editingIndex);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      dispatch(updateTodos(editTodoArray(todos, editingIndex, textValue)));
      handleCancelEdit();
    } else {
      if (textValue !== "") {
        dispatch(addTodo(textValue));
        dispatch(setTextValue(""));
      }
    }
  };

  const handleCancelEdit = () => {
    dispatch(setTextValue(""));
    dispatch(editingState(null));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          color="primary"
          size="small"
          label="Tap to write"
          fullWidth
          variant="outlined"
          value={textValue}
          onChange={(e) => dispatch(setTextValue(e.target.value))}
        />
        {editingIndex === null ? (
          ""
        ) : (
          <Button
            onClick={handleCancelEdit}
            color="default"
            variant="contained"
          >
            Cancel
          </Button>
        )}
        <Button type="submit" color="primary" variant="contained">
          {editingIndex === null ? "add" : "save"}
        </Button>
      </form>
    </Container>
  );
};

export default connect((state) => ({ state }))(TodoForm);
