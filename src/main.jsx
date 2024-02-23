import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './pages/Login';
import Criar_Conta from './pages/Criar_Conta';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Criar_Conta" element={<Criar_Conta />} />
    </Routes>
  </Router>
);
