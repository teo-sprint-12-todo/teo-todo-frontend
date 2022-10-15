import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
`;

interface NavButtonProps {
  path: string;
  icon: any;
  text: string;
  onClick: () => void;
}
function NavButton({ path, icon, text, onClick }: NavButtonProps) {
  return (
    <Button onClick={onClick}>
      <Link to={path}>
        <img src={icon} alt={text} />
      </Link>
    </Button>
  );
}

export default NavButton;
