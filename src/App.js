import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import CreateNote from './components/dashboard/dashboardoperations/CreateNote';
import PageNotFound from './components/shared/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/createnote" element={<CreateNote />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
