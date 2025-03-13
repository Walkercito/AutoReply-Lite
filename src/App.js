/* eslint-disable no-unused-vars */
// src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import LogIn from './pages/session/Login'

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </Router>
    )
}

export default App
