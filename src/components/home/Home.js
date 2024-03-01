import React, { useState } from "react";
import Slider from "react-slick";
import './Home.scss';
import Header from '../../middleware/header/Header';
import Category from "../category/Category";
import CardSlider from "../cardslider/CardSlider";

function Home() {

    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);
    var settings = {
        dots: false,
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
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
            url: 'https://s3-media0.fl.yelpcdn.com/educatorphoto/tWLrOY2wyZGrHM8Gwkh-lA/o.jpg',
            name: "2024 Top 100 Pizza Spots",
            title: "See list",
            image: <i class="fa-solid fa-list"></i>
        },
        {
            id: 2,
            url: 'https://s3-media0.fl.yelpcdn.com/educatorphoto/fP07TGmh-eQwrs3j-aa1Qg/o.jpg',
            name: "Nothing like a new coat of paint",
            title: 'Painters',
            image: <i class="fa-solid fa-magnifying-glass"></i>
        },
        {
            id: 3,
            url: 'https://s3-media0.fl.yelpcdn.com/educatorphoto/C4O5eA3mjw5u5eY9xSw7BA/o.jpg',
            name: "Time for a tune-up?",
            title: "Auto repair",
            image: <i class="fa-solid fa-magnifying-glass"></i>
        },
        {
            id: 4,
            url: 'https://s3-media0.fl.yelpcdn.com/educatorphoto/G83aI84uvdLSAshymsNCwg/o.jpg',
            name: "Get a deep clean",
            title: "Cleaners",
            image: <i class="fa-solid fa-magnifying-glass"></i>
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

                <div>
                    {data?.map((item, index) => {
                        return (
                            <div className="list-names-position" key={index}>
                                <div className="list-names-positions">
                                    {activeSlide2 === index ? item?.name : null}
                                </div>
                                <div className="mt-4">
                                    {activeSlide2 === index ? <>
                                        <button className="buttons">{item?.image}{activeSlide2 === index ? item?.title : null}</button>

                                    </> : <></>}
                                </div>
                            </div>
                        )
                    })}
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

            <div>
                <CardSlider />
            </div>

            <div className="mt-5 mb-5">
                <Category />
            </div>

        </div>
    )
}

export default Home


// import React from 'react'
// import CardSlider from '../cardslider/CardSlider'

// function Home() {
//     return (
//         <div>
//             {/* <CardSlider /> */}
//         </div>
//     )
// }

// export default Home
