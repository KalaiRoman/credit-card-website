import React, { useState } from "react";
import Slider from "react-slick";
import './Home.scss';
import Header from '../../middleware/header/Header';
function Home() {

    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);
    var settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: dots => (
            <div
                className=""
            >
                <div style={{ margin: "0px" }}> {dots} </div>
            </div>
        ),
        customPaging: i => (
            <div
                className="dot-section-btn"
            >
                {i + 1}
            </div>
        ),
        beforeChange: (current, next) => {
            setOldSlide(current);
            setActiveSlide(next);
        },
        afterChange: current => setActiveSlide2(current)
    };
    const data = [
        {
            id: 1,
            url: 'https://s3-media0.fl.yelpcdn.com/educatorphoto/tWLrOY2wyZGrHM8Gwkh-lA/o.jpg'
        },
        {
            id: 2,
            url: 'https://s3-media0.fl.yelpcdn.com/educatorphoto/fP07TGmh-eQwrs3j-aa1Qg/o.jpg'
        },
        {
            id: 3,
            url: 'https://s3-media0.fl.yelpcdn.com/educatorphoto/C4O5eA3mjw5u5eY9xSw7BA/o.jpg'
        },
        {
            id: 4,
            url: 'https://s3-media0.fl.yelpcdn.com/educatorphoto/G83aI84uvdLSAshymsNCwg/o.jpg'
        }
    ]
    return (
        <div className='main-home-section'>
            <div className='inside-home-section'>
                <div className='banner-home-section'>
                    <Header />
                </div>
                <div>
                    <Slider {...settings}>
                        {data?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item?.url} alt={`no images${index + 1}`} className="slider-image" />
                                </div>
                            )
                        })}
                    </Slider>

                </div>
                <div className="kalai">
                    {data?.map((item, index) => {
                        return (
                            <div key={index} className="empty-box mb-4" style={{
                                backgroundColor: activeSlide2 === index ? "white" : "#96989c",
                                border: `1px solid ${activeSlide2 === index ? "white" : "#96989c"}`

                            }}

                            >

                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Home