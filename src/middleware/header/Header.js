import React, { useState } from 'react'
import './Header.scss';
import { headertext } from '../utils';
import { useLocation, useNavigate } from 'react-router-dom';
import Sigin from '../../components/auth/Sigin';
import Signup from '../../components/auth/Signup';
import burger from '../../assests/images/burger.png'
import Dropdown from 'react-bootstrap/Dropdown';
const Header = () => {

    const navigate = useNavigate();

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


    const changePathhome = () => {
        navigate("/");
    }

    return (
        <>
            {/* {history?.pathname == "/" ? <div className='path-names'>
                <div className='header-logo-section cursor text-2xl fw-bold flex align-items-center justify-center'

                    onClick={changePathhome}
                >

                    Home
                </div >
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

                    <div className='cursor' onClick={() => navigate("/contact")}>
                        Contactus
                    </div>
                    <div className='cursor'>
                        <Sigin show={show} handleShow={handleShow} handleClose={handleClose}
                            type={type}
                            handleShowsignup={handleShow1}
                            path={history?.pathname}

                        />

                    </div>
                    <div className='cursor'>
                        <Signup
                            show={show1} handleShow={handleShow1} handleClose={handleClose1}
                            handleShowLogin={handleShow}
                        />
                    </div>
                </div>
            </div > : <>

                <div className={"main-header-section"}>
                    <div className='header-logo-section cursor text-2xl fw-bold flex align-items-center justify-center'
                        onClick={changePathhome}

                    >
                       
                        Home


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
                       
                        <div className='cursor text-2xl fw-bold' onClick={() => navigate("/contact")}>
                            Contactus
                        </div>
                        <div className='cursor'>
                            <Sigin show={show} handleShow={handleShow} handleClose={handleClose}
                                type={type}
                                handleShowsignup={handleShow1}
                                path={history?.pathname}
                            />
                        </div>
                        <div className='cursor'>
                            <Signup
                                show={show1} handleShow={handleShow1} handleClose={handleClose1}
                                handleShowLogin={handleShow}
                                path={history?.pathname}

                            />
                        </div>
                    </div>
                </div>
            </>} */}


            <div className={"main-header-section"} >
                <div className='header-logo-section cursor flex align-items-center justify-center'
                    onClick={changePathhome}

                >

                    Home


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

                    <div className='cursor' onClick={() => navigate("/contact")}>
                        Contactus
                    </div>


                    {true ? <>
                        <Dropdown

                        >
                            <Dropdown.Toggle variant="bg-none" id="dropdown-basic" className="outline-none">
                                <img className="w-10 h-10 rounded overflow-hidden" src="https://t3.ftcdn.net/jpg/05/60/26/08/360_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg" alt="no image" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className='pl-2 pr-2 mt-2 mb-3'>
                                    <div onClick={() => window.location.assign("/profile")}
                                        className='cursor pl-3 hover:scale-105 hover:text-red-600 hover:border-b w-auto'>
                                        Profile
                                    </div>
                                    <div onClick={() => window.location.assign("/kyc")}
                                        className='cursor pl-3  pt-3 hover:scale-105 hover:text-red-600 hover:border-b w-auto'>
                                        KYC
                                    </div>
                                    <div className='cursor pl-3 mt-3 hover:scale-105 hover:text-red-600 hover:border-b w-auto'>
                                        Logout
                                    </div>

                                </div>

                            </Dropdown.Menu>
                        </Dropdown>
                    </> : <>

                        <div className='cursor'>
                            <Sigin show={show} handleShow={handleShow} handleClose={handleClose}
                                type={type}
                                handleShowsignup={handleShow1}
                                path={history?.pathname}
                            />
                        </div>
                        <div className='cursor'>
                            <Signup
                                show={show1} handleShow={handleShow1} handleClose={handleClose1}
                                handleShowLogin={handleShow}
                                path={history?.pathname}
                            />
                        </div>
                    </>}

                </div>
            </div>
        </>

    )
}

export default Header
