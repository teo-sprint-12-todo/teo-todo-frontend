import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './pages/Calendar';
import MainTodoList from './pages/MainTodoList';
import Retrospect from './pages/Retrospect/Retrospect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mainTodoList" element={<MainTodoList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/retrospect" element={<Retrospect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
