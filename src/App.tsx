import React from 'react';
import { HashRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Navigation from './common/Navigation';
import LandingPage from './pages/Auth/LandingPage';
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';
import Calendar from './pages/Calendar';
import GoalList from './pages/GoalList';
import GoalsDetail from './pages/GoalsDetail';
import MainTodoList from './pages/MainTodoList';
import Retrospect from './pages/Retrospect/Retrospect';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mainTodoList" element={<MainTodoList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/goalList" element={<GoalList />} />
        <Route path="/retrospect" element={<Retrospect />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/goalsDetail" element={<GoalsDetail />} />
      </Routes>
      {window.location.pathname !== ('/teo-todo-frontend/' && '/teo-todo-frontend/signUp' && '/teo-todo-frontend/signIn') && <Navigation />}
    </HashRouter>
  );
}

export default App;
