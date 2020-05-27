import React from "react";
import { Container, Buttons, EditButton, DeleteButton } from "./style";
import { MdEdit, MdDelete } from "react-icons/md";

const TodoCard = ({ text, index, handleDelete, handleEdit }) => {
  return (
    <Container>
      <p>{text}</p>
      <Buttons>
        <EditButton onClick={()=>handleEdit(index)}>
          <MdEdit />
        </EditButton>
        <DeleteButton onClick={()=>handleDelete(index)}>
          <MdDelete />
        </DeleteButton>
      </Buttons>
    </Container>
  );
};

export default TodoCard;
