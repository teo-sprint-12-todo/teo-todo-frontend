import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';
import todoImg from '../../assets/navImg/todo.svg';
import activeTodoImg from '../../assets/navImg/active_todo.svg';
import calendarImg from '../../assets/navImg/calendar.svg';
import activeCalendarImg from '../../assets/navImg/active_calendar.svg';
import retrospectImg from '../../assets/navImg/retrospect.svg';
import activeRetrospectImg from '../../assets/navImg/active_retrospect.svg';
import goalImg from '../../assets/navImg/goal.svg';
import activeGoalImg from '../../assets/navImg/active_goal.svg';
import { NAV_HEIGHT } from '../../constants/style';


const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${NAV_HEIGHT}px;
  border-top: 1px solid #d8d8dc;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: white;
`;
function Navigation() {
  const [currentPathName, setCurrentPathName] = React.useState<string>();

  const handleClick = (pathName: string) => {
    setCurrentPathName(pathName);
  };

  return (
    <NavWrapper>
      <NavButton
        icon={currentPathName === '/mainTodoList' ? activeTodoImg : todoImg}
        text="투두"
        path="/mainTodoList"
        onClick={() => handleClick('/mainTodoList')}
      />
      <NavButton
        icon={currentPathName === '/calendar' ? activeCalendarImg : calendarImg}
        text="캘린더"
        path="/calendar"
        onClick={() => handleClick('/calendar')}
      />
      <NavButton
        icon={
          currentPathName === '/retrospect'
            ? activeRetrospectImg
            : retrospectImg
        }
        text="회고"
        path="/retrospect"
        onClick={() => handleClick('/retrospect')}
      />
      <NavButton
        icon={currentPathName === '/goal' ? activeGoalImg : goalImg}
        text="목표"
        path="/goalList"
        onClick={() => handleClick('/goalList')}
      />
    </NavWrapper>
  );
}

export default Navigation;
