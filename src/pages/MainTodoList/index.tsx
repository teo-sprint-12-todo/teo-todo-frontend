import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FloatingActionButton } from '../../common/Buttons';
import { TodoInputBox, TodoOptionsAndSubmit } from '../../components/AddTodoInput';
import TodoListElem from '../../components/TodoListElem';
import CategoryBox from '../../components/CategoryGroup'
import { SAMPLE_AUTH_TOKEN } from '../../constants/url';
import { TodoRequestBody } from '../../types/todo';
import BASEURL from '../../config';
import { TodoType } from '../../types/mainTodoListType';

const TodoListMain = styled.div`
    padding : 0 1.2em 0 1.2em;  
`
const TodoListBox = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.8em;
    padding : 2em 0em 4em 0em;
`;

/** MainTodoList */
function MainTodoList() {
const ADD_TODO_INITIAL_VALUE = {
    categoryId: -1,
    goalId: -1,
    text: "",
    importance: 0,
    endDate: "",
}

  const [categoryList, setCategoryList] = useState();
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const [isInputBoxVisible, setIsInputBoxVisible] = useState(false)
  const [isOptionsBoxVisible, setIsOptionsBoxVisible] = useState(false)
  const [todo, setTodo] = useState<TodoRequestBody>(ADD_TODO_INITIAL_VALUE);
  const [todoList, setTodoList] = useState<TodoType[]>([])

  async function RequestCategoryList() {
    // TODO: 카테고리 리스트 요청
    try {
      const myHeaders = new Headers();
      myHeaders.append(
        'Authorization',
        'bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGVsdG9ud29uQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiJ9.nLeekFmZL1s9QYlVsQQrslSa1ucvvL4Ng_1dT5sRKKA'
        );
        
        const requestOptions: RequestInit = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        };
        
        const response = await fetch(' http://3.35.154.223:8080/v1/todo/category/list', requestOptions).then(res=> res.json())
        if(response.statusCode === 200){
          setCategoryList(response.data)
        }
      } catch (err) {
        console.log('@@@@@@@@@@ GET TODO CSTEGORY LIST ERROR @@@@@@@@@@')
        console.log(err)
      }
  }
    
  const requestTodoList = async () => {
    let uri = ""
    if(selectedCategory === -1) {
      uri = "list";
    } else {
      uri = `list?category=${selectedCategory}`
    }

    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGVsdG9ud29uQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiJ9.nLeekFmZL1s9QYlVsQQrslSa1ucvvL4Ng_1dT5sRKKA");
      
      const requestOptions : RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      const response = await fetch(`${BASEURL}todo/todo/${uri}`, requestOptions).then(res=> res.json())
      if(response.statusCode === 200){
        setTodoList(response.data)
      }
    } catch (err) {
      console.log('@@@@@@@@@@ GET TODO TODO LIST ERROR @@@@@@@@@@')
      console.log(err);
    }
  }

    useEffect(()=> {
      RequestCategoryList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
      requestTodoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedCategory])
    

  const onClickCategory = (id: number) => {
    setSelectedCategory(id);
  }

  const handleClickAddButton = () => {
    if(isInputBoxVisible) {
      setIsOptionsBoxVisible(false);
      setIsInputBoxVisible(false);
    } else {
      setIsOptionsBoxVisible(true);
      setIsInputBoxVisible(true);
    }
  }

  const handleSubmit = async () => {
    try {
      if(!todo.endDate) return;
      if(!todo.text) return;

      const resp = await axios.post(`${BASEURL}todo/todo/add`, todo, {
        headers: {
            Authorization: `bearer ${SAMPLE_AUTH_TOKEN}`,
            "Content-Type": "application/json",
        }
      })

      if(resp.status === 200){
        requestTodoList()
        setTodo(ADD_TODO_INITIAL_VALUE)
        setIsOptionsBoxVisible(false)
        setIsInputBoxVisible(false)
      }
    } catch(err) {
      console.log('error')
      console.log(err);
    }
  }

  return (
    <>
    <div>
      <TodoListMain>
      {categoryList&& <CategoryBox categoryList={categoryList} onClickHandler={onClickCategory} />}
      {isInputBoxVisible && todo && <TodoInputBox todoText={todo.text} setTodo={setTodo} />}
      <TodoListBox>
        {todoList.map((data)=> 
          <TodoListElem key={data.id} importance={data.importance} context={data.text} id={data.id}/>
        )}
      </TodoListBox>
      </TodoListMain>
      {isOptionsBoxVisible && <TodoOptionsAndSubmit onSubmit={handleSubmit} setTodo={setTodo}/>}
    </div>
    <FloatingActionButton onClick={handleClickAddButton} isInputBoxVisible={isInputBoxVisible} />
    </>
  );
}


export default MainTodoList;
