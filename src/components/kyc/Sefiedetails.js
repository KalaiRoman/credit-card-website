import React, { useState } from 'react'

function Sefiedetails() {

  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const files = e.target.files[0];
    if (files) {
      setImage(URL.createObjectURL(files));
    }
  }
  return (
    <div className='border p-3 rounded'>
      <div className='fw-bold text-center text-3xl mb-3 mt-3'>
        Selfie Details
      </div>
      <div className='flex align-items-center justify-content-center justify-content-center'>
        <img src="https://static.vecteezy.com/system/resources/previews/010/987/398/original/3d-illustration-of-holding-phone-with-camera-app-png.png" alt="no image"
          className='w-[100px] h-[100px] object-contain'
        />
      </div>

      <div className='mx-auto flex align-items-center justify-content-center mt-4 '>
        <div className='flex align-items-center justify-center mt-5'>
          <input type="file" className='d-none' id="profile-image" onChange={handleChange} />
          <label htmlFor='profile-image'>
            {image ? <>
              <img className="w-[120px] h-[120px] cursor border-2  rounded-full overflow-hidden " src={image} alt="no image" />

            </> : <>
              <img className="w-[120px] h-[120px] cursor border-2  rounded-full overflow-hidden overflow-hidden" src="https://t3.ftcdn.net/jpg/05/60/26/08/360_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg" alt="no image" />

            </>}
          </label>
        </div>
      </div>

      <div className='mt-4 mx-auto flex align-items-center justify-content-center mb-[6%]'>
        <button className='bg-orange-500 p-2 w-[20%] fw-bold text-1xl rounded-full'>Submit</button>
      </div>
    </div>
  )
}

export default Sefiedetails
