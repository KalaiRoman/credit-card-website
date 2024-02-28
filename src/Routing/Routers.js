import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { Home } from '../pages';
function Routers() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
            </Routes>
        </div>
    )
}
export default Routers