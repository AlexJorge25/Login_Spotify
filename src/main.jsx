import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './pages/Login';
import Criar_Conta from './pages/Criar_Conta';
const domNode = document.getElementById('root')
createRoot(domNode).render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Criar_Conta" element={<Criar_Conta />} />
    </Routes>
  </Router>
);
