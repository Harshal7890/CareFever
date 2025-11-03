import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
    return (
        <div className="dark:bg-dark-bg bg-light-bg">
            <Routes>
                <Route path="/" element={<Homepage />} /> 
            </Routes>
        </div>
    );
}


export default App;
