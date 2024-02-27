import { Routes, Route } from 'react-router-dom';





import React from 'react'
import Sigin from '../components/auth/Sigin';
import Signup from '../components/auth/Signup';
import Home from '../components/home/Home';

function Routers() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/register" element={<Signup />}></Route>
                <Route path="/login" element={<Sigin />}></Route>
            </Routes>
        </div>
    )
}

export default Routers