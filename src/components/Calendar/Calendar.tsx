import React from 'react'
import ReactCalendar from 'react-calendar';
import CalendarWrapper from './CalendarWrapper';


function Calendar() {

    return (
        <CalendarWrapper>
            <ReactCalendar  formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}/>
        </CalendarWrapper>
    )
}

export default Calendar