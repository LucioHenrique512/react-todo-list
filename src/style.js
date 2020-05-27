import styled, { createGlobalStyle } from "styled-components";
import { color } from "./constants";

export const GlobalStyle = createGlobalStyle`
*{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  html,body, #root{
      height: 100%;
  }
  body{
-webkit-font-smoothing: antialiased !important;
      font-family: 'Roboto', sans-serif;
      background:${color.BACKGROUND_COLOR_DARK};

}
  ul{
    list-style:none;
    }

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: transparent;
}

::-webkit-scrollbar
{
	width: 6px;
	background-color: transparent;
}

::-webkit-scrollbar-thumb
{
	background-color: #c4c4c4;
}
`;
export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppFrame = styled.div`
  height: 800px;
  width: 500px;
  background: ${color.FRAME_BACKGROUND_DARK};
  border-radius: 4px;
  padding: 20px;
  transition: 0.2s;
  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`;

export const AppHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media (prefers-reduced-motion: no-preference) {
    img {
      animation: spinLogo ${({ spinspeed }) => spinspeed}s infinite linear;
    }
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
  h1 {
    font-size: 30px;
    color: #fff;
    ${({ spinspeed }) =>
      spinspeed <= 3 ? "animation: easterEggText .8s infinite" : ""};
  }

  @keyframes spinLogo {
    0% {
      transform: rotatez(0deg);
    }
    100% {
      transform: rotatez(360deg);
    }
  }
  @keyframes easterEggText {
    0%,100% {
      color: #fff;
    }
   50% {
      color: ${color.PRIMARY_COLOR};
    }
  }
`;

export const Body = styled.div`
  height: calc(100% - 120px);
`;
