import React from 'react'
import Modal from 'react-bootstrap/Modal';
import './Signin.scss';
function Signup({ show, handleClose, handleShow, handleShowLogin }) {
    const Navigateterms = () => {
        window.open('/termsofservice')
    }
    const Navigateprivacy = () => {
        window.open('/privacypolicy')
    }
    return (
        <div>
            <button className='signup-btn' onClick={() => (handleShow("signup"))}>
                Sign up
            </button>
            <Modal show={show} onHide={handleClose} centered    >
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
                                Sign up to Card
                            </div>

                            <div className='text-center'>
                                Connect with great local businesses
                            </div>

                        </div>
                        <div className='text-center  mt-4  mb-5'>
                            By proceeding, you agree to Yelp’s <span className='link' onClick={Navigateterms}>Terms of Service</span> and acknowledge Yelp’s <span className='link' onClick={Navigateprivacy}>Privacy Policy.</span>
                        </div>



                        <div className='form-section-login mt-4'>
                            {Array(3)?.fill(null)?.map((item, index) => {
                                return (
                                    <div className='mt-3 mb-4'>

                                        <div>
                                            <button className='all-btnss'>
                                                <div>
                                                    {index === 0 ? <> <i class="fa-brands fa-google"></i></> : null}
                                                    {index === 1 ? <>       <i class="fa-brands fa-apple"></i></> : null}
                                                    {index === 2 ? <>
                                                        <i class="fa-solid fa-envelope"></i>
                                                    </> : null}
                                                </div>


                                                {index === 0 ? <>Continue with Google</> : null}
                                                {index === 1 ? <>Continue with Apple</> : null}
                                                {index === 2 ? <>Continue with email</> : null}

                                            </button>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='form-section-login mt-5 mb-3'>
                            <hr />
                        </div>
                        <div className='text-center cursor mb-5 mt-4'>
                            Already on Card? <span className='link' onClick={() => {
                                handleShowLogin();
                                handleClose()
                            }}>Log In</span>
                        </div>

                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default Signup