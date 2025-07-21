import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomeVinali';
import Dashboard from './pages/DashboardVinali';
import Login from './pages/Login';
import Registro from './pages/Registro';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/login" element={<Login />} />
    <Route path="/registro" element={<Registro />} />
  </Routes>
);

export default App;