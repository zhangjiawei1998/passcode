import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import './index.css';
import Passcode from './routes/passcode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Routes>
        <Route path='/' element={<Passcode/>} />
      </Routes>
    </HashRouter>
);


