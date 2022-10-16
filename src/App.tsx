import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navigation from './common/Navigation';
import Tier from './components/Tier';
import SignInPage from './pages/Auth/SignInPage';
import SignUpPage from './pages/Auth/SignUpPage';
import Calendar from './pages/Calendar';
import GoalsDetail from './pages/GoalsDetail';
import MainTodoList from './pages/MainTodoList';
import Retrospect from './pages/Retrospect/Retrospect';

function App() {
  return (
    <HashRouter>
      <Tier />
      <Routes>
        <Route path="/mainTodoList" element={<MainTodoList />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/retrospect" element={<Retrospect />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/goalsDetail" element={<GoalsDetail />} />
      </Routes>
      <Navigation />
    </HashRouter>
  );
}

export default App;
