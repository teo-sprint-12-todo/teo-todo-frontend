import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';

const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;

`;
function Navigation() {
  const [currentPathName, setCurrentPathName] = React.useState<string>();

  const handleClick = (pathName:string) => {
    setCurrentPathName(pathName);
  };

  return (
    <NavWrapper>
      <NavButton icon="./logo512.svg" text="투두" path="/mainTodoList" onClick={() => handleClick('/mainTodoList')} isActive={currentPathName === '/mainTodoList'} />
      <NavButton icon="./logo512.svg" text="캘린더" path="/calendar" onClick={() => handleClick('/calendar')} isActive={currentPathName === '/calendar'} />
      <NavButton icon="./logo512.svg" text="회고" path="/" onClick={() => handleClick('/')} />
      <NavButton icon="./logo512.svg" text="목표" path="/" onClick={() => handleClick('/')} />
    </NavWrapper>
  );
}

export default Navigation;
