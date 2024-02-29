import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Modalphotos() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setData(res?.data);
        })
    }, [data])
    return (
        <div>
            <button className='see-all-btn' onClick={handleShow}>See all 123 photos</button>


            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-width"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <div className='d-flex align-items-center justify-content-between w-100'>
                        <div className='fw-bold fs-2'>Photos for Sakura</div>

                        <div className='d-flex align-items-center'>
                            <div className='photo-add'>
                                <i class="fa-solid fa-camera"></i> <span>Add photos</span>
                            </div>
                            <div className="d-flex justify-content-center h-100 ms-5">
                                <div className="search">
                                    <input type="text" className="search-input" placeholder="Search Photos..." name />
                                    <a href="#" className="search-icon">
                                        <i className="fa fa-search" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body>

                    <div className='row d-flex gap-5 container mx-auto align-items-center justify-content-center mb-5'>
                        {data?.map((item, index) => {
                            return (
                                <div className='card-photos' key={index}>
                                    <img src={item?.image} alt="no image" className='image-size' />
                                </div>
                            )
                        })}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Modalphotos
