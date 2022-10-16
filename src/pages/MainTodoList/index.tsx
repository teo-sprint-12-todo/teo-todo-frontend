import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FloatingActionButton } from '../../common/Buttons';
import { TodoInputBox, TodoOptionsAndSubmit } from '../../components/AddTodoInput';
import TodoListElem from '../../components/TodoListElem';
import CategoryBox from '../../components/CategoryGroup'

import { Item } from '../../types/dummy';
import { SAMPLE_AUTH_TOKEN, SERVER_URL } from '../../constants/url';
import { TodoRequestBody } from '../../types/todo';

const TodoListMain = styled.div`
    padding : 0 1.2em 0 1.2em;  
`
const TodoListBox = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.8em;
    padding : 2.5em 0em 4em 0em;
`;

const lst: Item[] = [
  {
    importance: 0,
    context: 'Loeam Ipsum',
  },
  {
    importance: 1,
    context: 'Loeam Ipsum',
  },
  {
    importance: 2,
    context: 'Loeam Ipsum',
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
  },
  {
    importance: 3,
    context: 'Loeam Ipsum',
  },
];


// TODO: 카테고리 늘어나면 스크롤
function RequestCategoryList(): { id: number; name: string }[] {
  console.log('카테고리 리스트 요청 !!!');
  // TODO: 카테고리 리스트 요청
  // const myHeaders = new Headers();
  // myHeaders.append(
  //   'Authorization',
  //   'bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGVsdG9ud29uQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiJ9.nLeekFmZL1s9QYlVsQQrslSa1ucvvL4Ng_1dT5sRKKA'
  // );

  // const requestOptions: any = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow',
  // };

  // fetch(' http://3.35.154.223:8080/v1/todo/category/list', requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log('error', error));

  const res = {
    statusCode: 200,
    resMessage: '카테고리 목록 반환 완료',
    data: [
      {
        id: 1,
        name: '카테고리 1',
      },
      {
        id: 2,
        name: '카테고리 2',
      },
      {
        id: 3,
        name: '카테고리 3',
      },
      {
        id: 4,
        name: '카테고리 4',
      },
    ],
  };
  return res.data;
}

function requestTodo(categoryId: number) {
  console.log(`${categoryId} 카테고리 투두 요청 !!!`);
  // TODO:카테고리별 투두리스트 요청
  // 처음엔 모두 요청
  const res = {
    statusCode: 200,
    resMessage: 'TODO 목록 반환 완료',
    data: [
      {
        id: 3,
        categoryId: null,
        categoryName: null,
        goalId: null,
        goalName: null,
        importance: 1,
        text: '단어 시험보기',
        startDate: '2022-10-15',
        endDate: '2022-10-16',
      },
      {
        id: 4,
        categoryId: 2,
        categoryName: '수정 카테고리',
        goalId: 1,
        goalName: '추가하는 목표',
        importance: 1,
        text: '단어 시험보기',
        startDate: '2022-10-15',
        endDate: '2022-10-18',
      },
    ],
  };
}

function onClickCategory(id: number) {
  console.log(`${id} clicked!!!`);
  requestTodo(id);
}



/** MainTodoList */
function MainTodoList() {
  const categoryList = RequestCategoryList();
  requestTodo(-1);
  const sample = [
    { id: 1, name: '카테1' },
    { id: 2, name: '카테2' },
  ];

  const [isInputBoxVisible, setIsInputBoxVisible] = useState<boolean>()
  const [isOptionsBoxVisible, setIsOptionsBoxVisible] = useState<boolean>()
  const initialState: TodoRequestBody = {
    text: '',
    endDate: '2022-12-31',
    importance: 0,
    goalId: -1,
    categoryId: -1,
  }
  const [todo, setTodo] = useState<TodoRequestBody>(initialState);

  const handleClickAddButton = () => {
    setIsOptionsBoxVisible(true)
    setIsInputBoxVisible(true)
  }

  const handleSubmit = async () => {
    try {

      const resp = await axios.post(`${SERVER_URL}/todo/todo/add`, todo, {
        headers: {
            "Authorization": `bearer ${SAMPLE_AUTH_TOKEN}`,
            "Content-Type": "application/json",
        }
      })
      console.log(resp)
      setTodo(initialState)
      setIsOptionsBoxVisible(false)
      setIsInputBoxVisible(false)
    } catch {
      console.log('error')
    }
  }

  const TodoList = lst.map((item) => (
    <TodoListElem key={item.importance} importance={item.importance} context={item.context} />
  ));

  return (
    <>
    <div>
      <TodoListMain>
      <CategoryBox categoryList={categoryList} onClickHandler={onClickCategory} />
      {isInputBoxVisible && <TodoInputBox todoText={todo.text} setTodo={setTodo} />}
      <TodoListBox>{TodoList}</TodoListBox>
      {isOptionsBoxVisible && <TodoOptionsAndSubmit onSubmit={handleSubmit} setTodo={setTodo}/>}
      </TodoListMain>
    </div>
    <FloatingActionButton onClick={handleClickAddButton} />
    </>
  );
}


export default MainTodoList;
