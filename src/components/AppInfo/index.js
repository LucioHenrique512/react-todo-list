import React, { useState } from "react";
import { Container, InfoButtom, InfoBody } from "./stye";
import { MdClose } from "react-icons/md";

const AppInfo = (prop) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Container>
      {show ? (
        <InfoBody>
          <span>
            A simple web app of the todo list made with React Js by{" "}
            <a href="https://www.linkedin.com/in/lucio-henrique-885468111/">
              Lúcio Henrique.
            </a>
            <br />
            <a href="https://github.com/LucioHenrique512/react-todo-list">
              GitHub
            </a>
          </span>
          <button onClick={handleClick}>
            <MdClose />
          </button>
        </InfoBody>
      ) : (
        <InfoButtom onClick={handleClick}>?</InfoButtom>
      )}
    </Container>
  );
};

export default AppInfo;
