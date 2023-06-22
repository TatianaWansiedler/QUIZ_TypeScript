import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/img.jpg";

export const GlobalStyles = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0;

        display: flex;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
        font-weight: 700;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2em;
    margin: 0;
  }

  h1 {
    font-family: "Coiny", cursive;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/clouds.jpg);
    background-size: auto;
    background-attachment: unset;
    background-position: 0%;
    font-size: 70px;
    animation: clouds-moving infinite 220s;
    animation-fill-mode: forwards;
    animation-play-state: running;
    animation-timing-function: linear;
    text-align: center;
    margin: 0;
  }
  @keyframes clouds-moving {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 50px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 1.2rem;
    color: #707070;
  }

  .start {
    max-width: 200px;
  }

  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: #d38558;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
