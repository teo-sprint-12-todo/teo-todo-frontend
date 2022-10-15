import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button<{ isActive: boolean }>`
    background-color: ${(props) => (props.isActive ? 'red' : 'black')};
`;

interface NavButtonProps {
  path: string
  icon: any
  text: string
  onClick: () =>void
  isActive?:boolean
}
function NavButton({
  path, icon, text, onClick, isActive,
}: NavButtonProps) {
  return (
    <Button isActive={isActive ?? false} onClick={onClick}>
      <Link to={path}>
        <img src={icon} alt={text} />
        {text}
      </Link>
    </Button>
  );
}

NavButton.defaultProps = {
  isActive: false,
};

export default NavButton;
