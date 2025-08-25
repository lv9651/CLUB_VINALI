import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomeVinali';
import Dashboard from './pages/DashboardVinali';
import Login from './pages/Login';
import Registro from './pages/Registro';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

const App = () => (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
    </Routes>
  </AuthProvider>
);

export default App;