import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Page } from '../../common/Page';
import Calendar from '../../components/Calendar/Calendar';
import { SAMPLE_AUTH_TOKEN, SERVER_URL } from '../../constants/url';
import { TodoList } from '../../types/todo';

function CalendarPage() {
  const [todoList, setTodoList] = useState<TodoList[]>([])


  const getTodoList = async(year:number, month:number ) => {

    try {

      const { data } = await axios.get<AxiosResponse<TodoList[]>>(`${SERVER_URL}/todo/todo/list/calendar/${year}/${month}`, {
        headers: {
            "Authorization": `bearer ${SAMPLE_AUTH_TOKEN}`,
            "Content-Type": "application/json",
        }
      })
      

      setTodoList(data.data)

    } catch {
      console.log('error')
    }
  }
  

  useEffect(( ) => {
    getTodoList(2022, 10)
  },[])

  return (
    <Page>
      <Calendar todoList={todoList}/>
    </Page>
  );
}

export default CalendarPage;
