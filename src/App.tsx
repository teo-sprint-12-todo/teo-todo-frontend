import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './common/Navigation';
import Tier from './components/Tier';
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';
import Calendar from './pages/Calendar';
import GoalList from './pages/GoalList';
import MainTodoList from './pages/MainTodoList';

function App() {
  return (
    <BrowserRouter>
      <Tier />
      <Routes>
        <Route path="/mainTodoList" element={<MainTodoList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/goalList" element={<GoalList/>} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
