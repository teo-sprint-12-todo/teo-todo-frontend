import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './pages/Calendar';
import MainTodoList from './pages/MainTodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mainTodoList" element={<MainTodoList />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
