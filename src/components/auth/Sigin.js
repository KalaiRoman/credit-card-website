import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './Signin.scss';
import Form from 'react-bootstrap/Form';
function Sigin({ show, handleClose, handleShow, handleShowsignup, path }) {
    const Navigateterms = () => {
        window.open('/termsofservice')
    }
    const Navigateprivacy = () => {
        window.open('/privacypolicy')
    }
    return (
        <div>
            <button className='login-btn' style={{ color: path === "/" ? "white" : "black", border: `2px solid ${path === "/" ? "#e00707" : "#eaeaeb"}` }} onClick={() => (handleShow("login"))}>
                Log In
            </button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <div className='d-flex justify-content-end mt-2 mb-3 cursor' onClick={handleClose}>
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div>
                        <div className='icons-users'>
                            <i class="fa-solid fa-circle-user"></i>
                        </div>
                        <div>
                            <div className='fw-bold text-center mt-2 mb-2'>
                                Sign in to Card
                            </div>
                            <div className='text-center'>
                                Connect with great local businesses
                            </div>
                        </div>
                        <div className='text-center  mt-4  mb-5'>
                            By proceeding, you agree to Yelp’s <span className='link' onClick={Navigateterms}>Terms of Service</span> and acknowledge Yelp’s <span className='link' onClick={Navigateprivacy}>Privacy Policy.</span>
                        </div>
                        <div className='form-section-login mt-4'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <button className='login-button'>Log in</button>
                        </div>
                        <div className='form-section-login mt-5 mb-3'>
                            <hr />
                        </div>
                        <div className='text-center cursor mb-5 mt-4'>
                            New to Card? <span className='link' onClick={() => {
                                handleShowsignup();
                                handleClose();
                            }}>Sign up</span>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default Sigin