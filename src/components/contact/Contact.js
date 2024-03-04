import React from "react"

import "./contact.scss"
import Header from './../../middleware/header/Header';
import Footer from "../../middleware/footer/Footer";

const Contact = () => {


  // const map = 'https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539974,77.6309395,11z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu';


  // const map = 'https://www.google.com/maps/embed?pb=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
  // const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>

      <div>
        <Header />
      </div>
      <div className="w-[100%] flex gap-4 h-[100vh]  overflow-hidden overflow-y-auto mt-3 mb-3">

        <div className="w-[50%] h-[100%]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497512.57745514496!2d79.87934029888532!3d13.047316859141315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709569605998!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709309065206!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}

        </div>
        <div className="w-[50%] p-3 ">
          <div className="fw-bold mb-2 text-4xl">Contact us</div>
          <p>We're open for any suggestion or just to have a chat</p>
          <div className='flex'>
            <div className='w-[33%]'>
              <div className="fw-bold text-2xl mb-2 mt-2">ADDRESS:</div>
              <p>Chennai, 600010</p>
            </div>
            <div className='w-[33%]'>
              <div className="fw-bold text-2xl mb-2 mt-2">EMAIL:</div>
              <p> Kalai@gmail.com</p>
            </div>
            <div className='w-[33%]'>
              <div className="fw-bold text-2xl mb-2 mt-2">PHONE:</div>
              <p> +91 235 2355 98</p>
            </div>
          </div>

          <div className='flex gap-3 mb-4 mt-4'>
            <input type='text' placeholder='Name' className=" rounded w-[45%] cursor" />
            <input type='email' placeholder='Email' className=" rounded w-[45%] cursor" />
          </div>
          <div className="mb-4">
            <input type='text' placeholder='Subject' className=" rounded w-[92%] cursor" />
          </div>

          <div className="mb-3">
            <textarea cols='25' rows='8' className="rounded w-[92%] cursor-pointer" >
              Create a message here...
            </textarea>
          </div>
          <button className='send-btn w-[15%]' >SEND MESSAGE</button>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  )
}

export default Contact
