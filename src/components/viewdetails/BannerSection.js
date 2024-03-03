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
                    </div>
                    <div className='right-banner-section'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerSection
