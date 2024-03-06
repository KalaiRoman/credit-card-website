import React, { useState, useEffetc, useEffect } from 'react'
import Slider from "react-slick";
import './CardSlider.scss';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CommonTitle from '../../middleware/Title';
function CardSlider() {
    const [oldSlide, setOldSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const [activeSlide2, setActiveSlide2] = useState(0);

    const [indexs, setIndexs] = useState(0);

    const data = [
        "https://www.visasoutheasteurope.com/dam/VCOM/regional/ap/taiwan/global-elements/images/tw-visa-platinum-card-498x280.png",
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshJCikQb6DuSqH_MW_Ta25U56d3P6knvuOTRyGAe8G3UJPZzmN1-CthOHM3Wns8NxQuo&usqp=CAU',
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLoX0UzN4KyNsgG84EsFRUVR1QA9PPXdH2Xci3tO-Er_qyA35Q8qr07lMEN3c4S1G7ByQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMjF1VNb95LlHZ8R6Ta7vJNl4mdamqPNO_5wnwxlGnFIS8Hm33c2wDGPjdPY5g8qm1DUY&usqp=CAU"
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        appendDots: dots => (
            <div
                className="mt-5 boxs"
            >
                <div style={{ margin: "0px" }}> {dots} </div>
            </div>
        ),
        customPaging: i => (
            <div
                className="dot-section-btns mt-5"
            >
                <div className='border-insides mt-5'
                    style={{
                        backgroundColor: activeSlide2 === i ? "#15F5BA" : "#F0F3FF",
                        border: `1px solid ${activeSlide2 === i ? "#15F5BA" : "#F0F3FF"}`
                    }}
                >
                </div>
            </div>
        ),
        beforeChange: (current, next) => {
            setOldSlide(current);
            setActiveSlide(next);
        },
        afterChange: current => setActiveSlide2(current)
    };


    useEffect(() => {
        const f = setInterval(() => {
            setIndexs(indexs + 2 * 25)
        }, 600);

        if (indexs == 200) {
            clearInterval(f);
            setIndexs(0)
        }
    }, [indexs]);



    return (
        <div className='main-cardslider mt-5 mb-5'>

            <div className='mb-5 mt-5'>
                <CommonTitle title="Cards" />
            </div>

            <div className='inside-cardslider '>
                <Slider {...settings}>
                    {data?.map((item, index) => {
                        return (
                            <div className='cardss hover:scale-90' key={index}>
                                <img src={item} alt="no image" className='credit-card-image' />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default CardSlider
