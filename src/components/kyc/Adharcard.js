import React from 'react'

function Adharcard() {
    return (
        <div className='border p-3 rounded'>
            <div className='fw-bold text-center text-3xl mb-3 mt-3'>
                Verify Aadhaar Number
            </div>
            <div className='flex align-items-center justify-content-center justify-content-center'>
                <img src="https://cdn.pixabay.com/photo/2022/11/09/00/44/aadhaar-card-7579588_960_720.png" alt="no image"
                    className='w-[230px] h-[230px] object-contain'
                />
            </div>

            <div className='mx-auto flex align-items-center justify-content-center'>
                <input type="text" placeholder='Enter Adhar Number'
                    className='border rounded w-[50%]'
                    minLength={6}
                    maxLength={12}
                />
            </div>

            <div className='mt-4 mx-auto flex align-items-center justify-content-center  mb-[6%]'>
                <button className='bg-orange-500 p-2 w-[20%] fw-bold text-1xl rounded-full'>Submit</button>
            </div>
        </div>
    )
}

export default Adharcard
