import styled from 'styled-components';
import React from 'react';
import { ToolbarProps } from 'react-big-calendar';
import {ReactComponent as ArrowLeft} from '../../assets/arrow-left.svg'
import {ReactComponent as ArrowRight} from '../../assets/arrow-right.svg'
import { resetButton } from '../../style/reset';


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 5px 16px 5px;
    box-sizing: border-box;
`

const Controller = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    

`
const ArrowButton = styled.button`
    ${resetButton};
    width: 18px;
    height: 18px;

    &:last-of-type {
        margin-left: 20px;
    }
`


function Toolbar(toolbar: ToolbarProps) {
    const { date, onNavigate } = toolbar;
    
    const goToBack = () => {
        console.log('prev')
      onNavigate('PREV');
    };
  
    const goToNext = () => {
      onNavigate('NEXT');
    };
  
    
  
  
    return (
      <Container>
        {`${date.getFullYear()}년 ${date.getMonth()+1}월`}
        <Controller>
            <ArrowButton onClick={goToBack}><ArrowLeft /></ArrowButton>
            <ArrowButton onClick={goToNext}><ArrowRight/></ArrowButton>
        </Controller>
        
      </Container>
    );
  }

  export default Toolbar