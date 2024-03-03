import React from 'react'
import './Viewdetails.scss';
import BannerSection from './BannerSection';
import Header from './../../middleware/header/Header';
export const ViewDetails = () => {
    return (
        <div className='main-viewdetails'>
            <div>
                <Header />
            </div>
            <div className='inside-view'>
                <BannerSection />
            </div>
        </div>
    )
}
