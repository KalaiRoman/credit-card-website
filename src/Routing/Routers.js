import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { Home } from '../pages';
import { ViewDetails } from '../components/viewdetails/ViewDetails';
function Routers() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/view/:id" element={<ViewDetails />}></Route>
            </Routes>
        </div>
    )
}
export default Routers