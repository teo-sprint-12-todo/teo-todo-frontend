import React from 'react';
import styled from 'styled-components';
import Plus from "../../assets/plus.svg"

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    background: #000000;
    color: white;
    position: fixed;
    bottom: calc(20px + 54px);
    right: 20px;
`;

const Img = styled.img<{onRotate:boolean}>`
  width:25px;
  height:25px;
  transform:${({onRotate})=> onRotate ? "rotate(45deg)" : "rotate(0deg)"};
`


interface Props {
  onClick: () => void;
  isInputBoxVisible:boolean;
}
function FloatingActionButton({onClick, isInputBoxVisible}: Props) {
  return (
    <Button onClick={onClick}>
      <Img src={Plus} onRotate={isInputBoxVisible} />
    </Button>
  );
}

export default FloatingActionButton;
