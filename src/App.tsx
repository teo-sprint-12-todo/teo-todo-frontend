import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './common/Navigation';
import Tier from './components/Tier';
import Calendar from './pages/Calendar';
import GoalList from './pages/GoalList';
import MainTodoList from './pages/MainTodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mainTodoList" element={<MainTodoList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/goalList" element={<GoalList/>} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
