import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './common/Navigation';
import Tier from './components/Tier';
import Calendar from './pages/Calendar';
import MainTodoList from './pages/MainTodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mainTodoList" element={<MainTodoList />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
