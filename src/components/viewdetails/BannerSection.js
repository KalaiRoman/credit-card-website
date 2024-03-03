import React from 'react'
import './Bnnaer.scss';
import { buger } from '../../assests/images';
import Modalphotos from './Modalphotos';
function BannerSection() {


    const data = [
        {
            id: 1,
            name: "Write a review",
            image: <i class="fa-regular fa-star"></i>
        },
        {
            id: 2,
            name: "Add photo",
            image: <i class="fa-solid fa-camera"></i>
        },
        {
            id: 3,
            name: "Share",
            image: <i class="fa-solid fa-share"></i>
        },
        {
            id: 4,
            name: "Save",
            image: <i class="fa-regular fa-bookmark"></i>
        },
        {
            id: 4,
            name: "Follow",
            image: <i class="fa-solid fa-plus"></i>
        }
    ]


    const datas = [
        {
            id: 1,
            name: "kalai@gmail.com",
            image: <i class="fa-solid fa-envelope"></i>
        },
        {
            id: 2,
            name: "8778377119",
            image: <i class="fa-solid fa-phone"></i>
        },
        {
            id: 3,
            name: "Get Directions",
            image: <i class="fa-solid fa-diamond-turn-right"></i>
        },
        {
            id: 4,
            name: "Message the business",
            image: <i class="fa-solid fa-message"></i>
        }
    ]
    return (
        <div className='main-banner-section'>
            <div className='inside-banner-image'>
                <img src={buger} alt="no image" className='buger-image' />
                <div className='banner-textss'>
                    <div>
                        Shopping
                    </div>
                    <div className='ratingbox mt-3'>
                        {Array(5)?.fill(null)?.map((item, index) => {
                            return (
                                <div className='rating-box' key={index}>
                                    <div className='rating-box'>
                                        <i class="fa-solid fa-star"></i>
                                    </div>

                                </div>
                            )
                        })}
                        <div className='rating-text'>
                            4.6 (158 reviews)
                        </div>
                    </div>
                    <div className='can-text'>
                        <span className='' style={{ color: '#58b4ff' }}> <i class="fa-solid fa-circle-check"></i> Claimed . </span> $ Candy Stores, Gift Shops, International Grocery
                    </div>
                    <div className='can-text'>
                        <span style={{ color: '#fa8884' }}> Closed </span> 10:30 AM - 6:00 PM
                        <span style={{ color: '#58b4ff' }}> Hours updated a few days ago</span>
                    </div>
                </div>
                <div>
                    <Modalphotos />
                </div>
            </div>


            <div className='inside-section-banner'>
                <div className='split-section-banner'>
                    <div className='left-banner-section'>
                        <div className='row gap-3 d-flex align-items-center'>
                            {data?.map((item, index) => {
                                return (
                                    <div key={index} className={index === 0 ? "active-btn" : "list-btn"}>
                                        <span>{item?.image}</span>{item?.name}
                                    </div>
                                )
                            })}
                        </div>
                        <div className='mt-[5%]'>
                            <hr />
                        </div>
                        <div>
                            <div className='text-2xl mt-4 fw-bold'>
                                Review Highlights
                            </div>
                            <div className='mt-4'>
                                {Array(4)?.fill(null)?.map((item, index) => {
                                    return (
                                        <div className='mt-3 mb-3 flex gap-3 cursor' key={index}>
                                            <div className='w-[14%]'>
                                                <img
                                                    className='w-[80px] h-[80px] rounded hover:scale-105'
                                                    src="https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?size=338&ext=jpg&ga=GA1.1.1395880969.1709424000&semt=sph" alt="no image" />
                                            </div>
                                            <div className='w-[84%] mt-3'>
                                                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='right-banner-section'>
                        <div className='border w-[100%]'>
                            <div className='p-3'>
                                {datas?.map((item, index) => {
                                    return (
                                        <div className='cursor' key={index}>
                                            <div className='flex justify-content-between'>
                                                <div className=''>
                                                    {item?.name}
                                                </div>
                                                <div className='hover:scale-125'>
                                                    {item?.image}
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='mb-4'>
                                <button className='border w-[80%] p-2 flex gap-3 cursor hover:scale-105 mx-auto align-items-center text-center justify-content-center'>
                                    <i class="fa-solid fa-pen-to-square"></i> Suggest an edit
                                </button>
                            </div>
                        </div>

                        <div className='mb-4 mt-3'>
                            <button className='border text-1xl w-[100%] p-2 flex gap-3 cursor hover:scale-105 mx-auto align-items-center text-center '>
                                10% off any one candle <i class="fa-solid fa-clock"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection
