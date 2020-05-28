import styled from "styled-components";
import { color } from "../../constants";

export const Container = styled.div`
  position: absolute;
  bottom: 17px;
  right: 17px;
`;
export const InfoButtom = styled.button`
  background-color: ${color.PRIMARY_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  height: 42px;
  width: 42px;
  transition: 0.2s;
  :hover {
    background: ${color.PRIMARY_COLOR_HOVER};
  }
`;

export const InfoBody = styled.div`
  background: white;
  padding: 15px;
  width: 350px;
  z-index: 6;
  position: relative;
  border-radius: 4px;
  display: flex;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    margin-left: 10px;
    background: none;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`;
