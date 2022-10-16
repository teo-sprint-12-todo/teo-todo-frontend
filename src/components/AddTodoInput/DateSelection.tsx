import React from 'react';
import Modal from 'react-modal';
import Calendar from 'react-calendar'

import './calendarStyle.css'
import styled from 'styled-components';
import { TodoRequestBody } from '../../types/todo';
import { OptionType } from './Option';

Modal.setAppElement('#root');


const CalendarWrapper = styled.div`
 
`
const Buttons = styled.div`
    display: flex;
    flex-flow: row;
`

const Button = styled.button`
    width: 50%;
    display: flex;

    justify-content: center;
    align-items: center;
    padding: 12px 0;
    border: none;
    background: #1C1C1E;
    color: #FF8024;
    text-align: center;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
`
const customStyles = {
    overlay: {
        background: 'rgba(80, 80, 80, 0.3)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'transparent',
      border: 'none',
    },
  };


interface Props {
    setTodo: React.Dispatch<React.SetStateAction<TodoRequestBody>>;
    setCurrentOption: React.Dispatch<React.SetStateAction<OptionType>>;
}
function DateSelection({ setTodo, setCurrentOption }: Props) {
    const [selectedDay, setSelectedDay] = React.useState<Date>()
    const [modalIsOpen, setIsOpen] = React.useState(true);

    const handleClickDay = (e: Date) => {
        setSelectedDay(e)
    }

    const handleClose = () => {
        setIsOpen(false)
        setCurrentOption(null)
    }

    const handleSelect = () => {
        if(!selectedDay) return 

        const localeDate = selectedDay.toLocaleDateString('ko-KR').replace(/\./g, '-').replace(/\s/g, '').slice(0, -1)
        setTodo(prev => ({ ...prev, endDate: localeDate }))
        setIsOpen(false)
    }


    return (

        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        
        contentLabel="Example Modal"
      >
        
        <CalendarWrapper>
            <Calendar 
                onClickDay={(e) => handleClickDay(e)}
                formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
            />
        </CalendarWrapper>
        <Buttons>
            <Button onClick={handleClose}>취소</Button>
            <Button onClick={handleSelect}>설정하기</Button>
        </Buttons>
      </Modal>
    )

}

export default DateSelection