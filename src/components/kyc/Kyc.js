import React, { useEffect, useState } from 'react'
import Header from '../../middleware/header/Header'
import Footer from '../../middleware/footer/Footer'
import Pancard from './Pancard';
import Adharcard from './Adharcard';
import Sefiedetails from './Sefiedetails';

function Kyc() {
    const [activename, setActiveName] = useState("PAN Details");
    const data = ["PAN Details", "Aadhaar details", "Selfie details"]
    useEffect(() => {
    }, [activename])
    return (
        <div className='w-[100%] h-[100%] overflow-auto '>
            <div>
                <Header />
            </div>
            <div className='h-[100%] overflow-auto mt-4'>

                <div className='w-[80%] mx-auto'>
                    <div className='fw-bold mb-4 mt-4 text-4xl'>
                        KYC
                    </div>
                    <div className='w-[100%] flex gap-[5%]'>
                        <div className='w-[25%]'>
                            {data?.map((item, index) => {
                                return (
                                    <div key={index} className='mt-4 mb-4' onClick={() => setActiveName(item)}>
                                        {activename === item ? <>
                                            <div className='bg-[#f0f2fb] w-[100%] flex gap-[14%] py-4 pl-3 cursor align-items-center rounded-3xl'>
                                                <div className='w-[25px] h-[25px] bg-[#4964d2] text-white fw-bold text-center rounded-[100%] flex align-items-center justify-center text-xs'>
                                                    {index + 1}
                                                </div>
                                                <div className='fw-bold'>
                                                    {item}
                                                </div>
                                                <div className='mt-1'>
                                                    <img className='w-[20px] h-[20px]' src="https://coindcx.s3.amazonaws.com/static/images/c2699d88-3d00-4ee5-99f8-9a8d53162369/arrow.webp" alt="no image" />
                                                </div>
                                            </div>
                                        </> : <>
                                            <div className='bg-[#F9F5F6] w-[100%] flex gap-[14%] py-4 pl-3 cursor align-items-center rounded-3xl'>
                                                <div className='w-[25px] h-[25px] bg-[#FDCEDF] text-black fw-bold text-center rounded-[100%] flex align-items-center justify-center text-xs'>
                                                    {index + 1}
                                                </div>
                                                <div className='fw-medium'>
                                                    {item}
                                                </div>
                                                <div className='mt-1'>
                                                    <img className='w-[20px] h-[20px]' src="https://coindcx.s3.amazonaws.com/static/images/c2699d88-3d00-4ee5-99f8-9a8d53162369/arrow.webp" alt="no image" />
                                                </div>
                                            </div>

                                        </>}

                                    </div>
                                )
                            })}
                        </div>
                        <div className='w-[75%] p-4'>
                            {activename === "PAN Details" ? <>
                                <Pancard />
                            </> : null}
                            {activename === "Aadhaar details" ? <>
                                <Adharcard />
                            </> : null}
                            {activename === "Selfie details" ? <>
                                <Sefiedetails />
                            </> : null}

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Kyc
