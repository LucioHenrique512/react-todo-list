import styled from "styled-components";
import { color } from "../../constants";

export const Buttons = styled.div`
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: flex;
  opacity: 0;
  transition: .2s;
  button {
    cursor: pointer;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    font-size: 18px;
  }
`;

export const EditButton = styled.button`
  color: ${color.PRIMARY_COLOR};
`;

export const DeleteButton = styled.button`
   color: ${color.DANGER_COLOR};
`;

export const Container = styled.li`
  background-color: #333333;
  margin-bottom: 15px;
  border-radius: 4px;
  padding: 14px;
  position: relative;
  :hover ${Buttons} {
    opacity: 1;
  }
  p {
    color: #fff;
  }
`;
