import React, { useState } from 'react'
import Header from '../../middleware/header/Header'
import Footer from '../../middleware/footer/Footer'

function Profile() {

    const [image, setImage] = useState(null);
    const handleChange = (e) => {
        const files = e.target.files[0];
        if (files) {
            setImage(URL.createObjectURL(files));
        }
    }

    return (
        <div className='w-[100%] h-[100vh] overflow-auto'>
            <div>
                <Header />
            </div>
            <div className='h-[100%]'>
                <div className='flex align-items-center justify-center mt-5'>
                    <input type="file" className='d-none' id="profile-image" onChange={handleChange} />
                    <label htmlFor='profile-image'>
                        {image ? <>
                            <img className="w-[120px] h-[120px] cursor border-2  rounded-full overflow-hidden objectfit-contain" src={image} alt="no image" />

                        </> : <>
                            <img className="w-[120px] h-[120px] cursor border-2  rounded-full overflow-hidden overflow-hidden" src="https://t3.ftcdn.net/jpg/05/60/26/08/360_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg" alt="no image" />

                        </>}
                    </label>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Profile
