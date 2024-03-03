import React, { useState } from 'react'
import './Header.scss';
import { headertext } from '../utils';
import { useLocation } from 'react-router-dom';
import Sigin from '../../components/auth/Sigin';
import Signup from '../../components/auth/Signup';
const Header = () => {


    const [type, setType] = useState(null);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (paramstype) => {
        setShow(true)
        setType(paramstype)
    };

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = (paramstype) => {
        setShow1(true)
    };
    const history = useLocation();
    const [thingbox, setThingBox] = useState(false);
    const [thingbox1, setThingBox1] = useState(false);

    const data = [
        {
            id: 1,
            name: "Burger",
            image: <i class="fa-solid fa-burger"></i>

        },
        {
            id: 2,
            name: "Truck",
            image: <i class="fa-solid fa-truck"></i>
        },
        {
            id: 3,
            name: "Clock",
            image: <i class="fa-solid fa-clock"></i>

        },
        {
            id: 3,
            name: "Clock",
            image: <i class="fa-solid fa-clock"></i>

        }
    ]

    return (
        <>
            {history?.pathname == "/" ? <div className='path-names'>
                <div className='header-logo-section'>
                    logo
                </div>
                <div className='middle-header-section'>
                    <div className='main-search-box' onMouseLeave={() => {
                        setThingBox(false)
                        setThingBox1(false)
                    }}>
                        <div className='first-search' onClick={() => {
                            setThingBox(true)
                            setThingBox1(false)
                        }}>
                            <input type="text" placeholder='things to do, nail salons, plumbers' className='thing-box'
                            />
                            {thingbox ? <>
                                <div className='thing-position'>
                                    {data?.map((item, index) => {
                                        return (
                                            <div key={index} className='d-flex gap-3 list-things cursor mb-3 mt-1'>
                                                <div>
                                                    {item?.name}
                                                </div>
                                                <div>
                                                    {item?.image}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </> : <></>}
                        </div>
                        <div className='middle-search' onClick={() => {
                            setThingBox1(true)
                            setThingBox(false)
                        }}>
                            <input type="text" placeholder='Location...' className='thing-box'
                            />
                            {thingbox1 ? <>
                                <div className='thing-position'>
                                    <div className='location-texts cursor'>
                                        <i class="fa-solid fa-location-dot"></i> <span>Current Location</span>
                                    </div>
                                    {data?.map((item, index) => {
                                        return (
                                            <div key={index} className='d-flex gap-3 list-things cursor mb-3 mt-1'>
                                                <div>
                                                    {item?.name}
                                                </div>
                                                <div>
                                                    {item?.image}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </> : <></>}
                        </div>
                        <div className='end-serach-icon'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>
                <div className='right-header-section'>
                    <div className='cursor'>
                        {headertext?.yelpforbusiness}
                    </div>
                    <div className='cursor'>
                        {headertext?.writeareview}
                    </div>
                    <div className='cursor'>
                        {/* {headertext?.login} */}
                        <Sigin show={show} handleShow={handleShow} handleClose={handleClose}
                            type={type}
                            handleShowsignup={handleShow1}
                        />

                    </div>
                    <div className='cursor'>
                        {/* {headertext?.signup} */}
                        <Signup
                            show={show1} handleShow={handleShow1} handleClose={handleClose1}
                            handleShowLogin={handleShow}
                        />
                    </div>
                </div>
            </div> : <>

                <div className={"main-header-section"}>
                    <div className='header-logo-section'>
                        logo
                    </div>
                    <div className='middle-header-section'>
                        <div className='main-search-box' onMouseLeave={() => {
                            setThingBox(false)
                            setThingBox1(false)
                        }}>
                            <div className='first-search' onClick={() => {
                                setThingBox(true)
                                setThingBox1(false)
                            }}>
                                <input type="text" placeholder='things to do, nail salons, plumbers' className='thing-box'
                                />
                                {thingbox ? <>
                                    <div className='thing-position'>
                                        {data?.map((item, index) => {
                                            return (
                                                <div key={index} className='d-flex gap-3 list-things cursor mb-3 mt-1'>
                                                    <div>
                                                        {item?.name}
                                                    </div>
                                                    <div>
                                                        {item?.image}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </> : <></>}
                            </div>
                            <div className='middle-search' onClick={() => {
                                setThingBox1(true)
                                setThingBox(false)
                            }}>
                                <input type="text" placeholder='Location...' className='thing-box'
                                />
                                {thingbox1 ? <>
                                    <div className='thing-position'>
                                        <div className='location-texts cursor'>
                                            <i class="fa-solid fa-location-dot"></i> <span>Current Location</span>
                                        </div>
                                        {data?.map((item, index) => {
                                            return (
                                                <div key={index} className='d-flex gap-3 list-things cursor mb-3 mt-1'>
                                                    <div>
                                                        {item?.name}
                                                    </div>
                                                    <div>
                                                        {item?.image}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </> : <></>}
                            </div>
                            <div className='end-serach-icon'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </div>
                    <div className='right-header-section'>
                        <div className='cursor'>
                            {headertext?.yelpforbusiness}
                        </div>
                        <div className='cursor'>
                            {headertext?.writeareview}
                        </div>
                        <div className='cursor' >
                            {headertext?.login}
                        </div>
                        <div className='cursor'>
                            {headertext?.signup}
                        </div>
                    </div>
                </div>
            </>}
        </>

    )
}

export default Header
