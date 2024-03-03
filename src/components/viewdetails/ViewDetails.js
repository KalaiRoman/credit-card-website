import React from 'react'
import './Viewdetails.scss';
import BannerSection from './BannerSection';
import Header from './../../middleware/header/Header';
import Footer from './../../middleware/footer/Footer';
export const ViewDetails = () => {
    return (
        <div className='main-viewdetails'>
            <div>
                <Header />
            </div>
            <div className='inside-view'>
                <BannerSection />
                <div>
                    <Footer />
                </div>
            </div>

        </div>
    )
}
