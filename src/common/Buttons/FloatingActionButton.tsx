import React from 'react';
import styled from 'styled-components';

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


interface Props {
  onClick: () => void
}
function FloatingActionButton({onClick}: Props) {
  return (
    <Button onClick={onClick}>
      +
    </Button>
  );
}

export default FloatingActionButton;
