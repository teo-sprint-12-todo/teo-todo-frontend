import React from 'react'
import moment from 'moment'
import { Calendar as BigCalendar, Event as BigCalendarEvent, momentLocalizer } from 'react-big-calendar'
import { TodoList } from '../../types/todo';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarWrapper from './CalendarWrapper';
import Toolbar from './Toolbar';
import 'moment/locale/ko';

moment.locale("ko");


const localizer = momentLocalizer(moment)

interface Props {
    todoList: TodoList[]
}

const importanceColor = (importance: number) => {
    switch (importance) {
        case 0:
            return '#D5F6DE'
        case 1:
            return '#FCEEE2'
        case 2:
            return '#FCE2E5'
        default:
            return '#D5F6DE'
    }
}

interface Event extends BigCalendarEvent {
    importance: number
}
function Calendar({ todoList }: Props) {
    console.log(todoList)

    
    const events: Event[] = todoList.map((todo) => ({ 
        start: new Date(todo.startDate), 
        end: new Date(todo.endDate), 
        importance: todo.importance
    }))
    


    return (
        
        <CalendarWrapper>
            <BigCalendar
                localizer={localizer}
                events={events} 
                views={['month']}
                culture='ko-KR'
                defaultView='month'
                eventPropGetter={(event) => ({ style: { backgroundColor:importanceColor(event.importance), height: '6px' } })}
                components={{
                    toolbar: Toolbar
                }}
                
            />
        </CalendarWrapper>
        
    )
}

export default Calendar