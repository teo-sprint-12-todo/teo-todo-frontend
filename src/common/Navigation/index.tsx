import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';

const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 54px;
  border-top: 1px solid #d8d8dc;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
function Navigation() {
  const [currentPathName, setCurrentPathName] = React.useState<string>();

  const handleClick = (pathName: string) => {
    setCurrentPathName(pathName);
  };

  return (
    <NavWrapper>
      <NavButton
        icon={
          currentPathName === '/mainTodoList'
            ? '/navImg/active_todo.png'
            : '/navImg/todo.png'
        }
        text="투두"
        path="/mainTodoList"
        onClick={() => handleClick('/mainTodoList')}
      />
      <NavButton
        icon={
          currentPathName === '/calendar'
            ? '/navImg/active_calendar.png'
            : '/navImg/calendar.png'
        }
        text="캘린더"
        path="/calendar"
        onClick={() => handleClick('/calendar')}
      />
      <NavButton
        icon={
          currentPathName === '/retrospect'
            ? '/navImg/active_retrospect.png'
            : '/navImg/retrospect.png'
        }
        text="회고"
        path="/"
        onClick={() => handleClick('/')}
      />
      <NavButton
        icon={
          currentPathName === '/goal'
            ? '/navImg/active_goal.png'
            : '/navImg/goal.png'
        }
        text="목표"
        path="/"
        onClick={() => handleClick('/')}
      />
    </NavWrapper>
  );
}

export default Navigation;
