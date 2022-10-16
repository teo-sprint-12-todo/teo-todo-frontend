import styled from 'styled-components'

const CalendarWrapper = styled.div`
  width: 100%;
  height: 500px;


  .rbc-calendar {
    margin: 15px;
    
  }
  
  .rbc-month-view {
    border: none;
 
  }

  .rbc-header {
    height: 22px;
    margin-bottom: 16px;
    border-bottom: 1px solid #EBEBF0;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 0.3px;

    color: #737373;

    
  }  
  .rbc-header + .rbc-header {
    border-left: none;
  }
  
  .rbc-off-range-bg {
    background: none;
  }
  
  .rbc-day-bg + .rbc-day-bg {
    border-left: none;
  }

  .rbc-month-row + .rbc-month-row {
    border-top: none;
  }

  .rbc-row-content {
   
  }
  
  .rbc-row {
    &:first-of-type {
        height: 28px;
        margin-bottom: 4px;
    }
  }

  .rbc-date-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
  

    
    & + .rbc-off-range {
      & > .rbc-button-link {

        color: #AEAEB2;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 13px;
      text-align: center;
      letter-spacing: 0.3px;
       }
     

    }

    & > .rbc-button-link {
      color: #0E0E0F;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 13px;
      text-align: center;
      letter-spacing: 0.3px;
    }
  }

 
  .rbc-now {
    position: relative; 
    
    & > .rbc-button-link {
      color: #fff;
      z-index: 1;
    }
 


    &::before{
      content: '';
      display: inline-block;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #FF6522;
      position: absolute;
      left: calc(50% - 14px);
      
    }
  }

  .rbc-today {
    background: transparent;
  }
    
 


  
`

export default CalendarWrapper