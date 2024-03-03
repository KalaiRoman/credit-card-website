import React from 'react'
import './Footer.scss';
function Footer() {

    const data = ["About Yelp",
        "Careers",
        "Press",
        "Investor Relations",
        "Trust & Safety",
        "Content Guidelines",
        "Accessibility Statement",
        "Terms of Service",
        "Privacy Policy",
        "Ad Choices",
        "Your Privacy Choices"];

    const data1 = [
        "Yelp Project Cost Guides",
        "Collections",
        "Talk",
        "Events",
        "Yelp Blog",
        "Support",
        "Yelp Mobile",
        "Developers",
        "RSS",
    ]

    const data2 = [
        "Yelp for Business",
        "Business Owner Login",
        "Claim your Business Page",
        "Advertise on Yelp",
        "Yelp for Restaurant Owners",
        "Table Management",
        "Business Success Stories",
        "Business Support",
        "Yelp Blog for Business",
    ]
    return (
        <div className='main-footer'>
            <div className='inside-footer-section'>
                <div className='first-footer'>
                    {data?.map((item, index) => {
                        return (
                            <div key={index}>

                                {index === 0 ? <>
                                    <div className='fw-bold fs-3 mt-3 mb-3'>
                                        About
                                    </div>
                                </> : <>
                                    <div className='cursor mt-2 mb-2'>
                                        {item}
                                    </div>
                                </>}


                            </div>
                        )
                    })}
                </div>
                <div className='second-footer'>
                    {data1?.map((item, index) => {
                        return (
                            <div key={index}>
                                {index === 0 ? <>
                                    <div className='fw-bold fs-3 mt-3 mb-3'>
                                        Discover
                                    </div>
                                </> : <>
                                    <div className='cursor mt-2 mb-2'>
                                        {item}
                                    </div>
                                </>}
                            </div>
                        )
                    })}
                </div>
                <div className='third-footer'>
                    {data2?.map((item, index) => {
                        return (
                            <div key={index}>
                                {index === 0 ? <>
                                    <div className='fw-bold fs-3 mt-3 mb-3'>
                                        Card for Business
                                    </div>
                                </> : <>
                                    <div className='cursor mt-2 mb-2'>
                                        {item}
                                    </div>
                                </>}
                            </div>
                        )
                    })}
                </div>
                <div className='fourth-footer'>
                    {Array(2)?.fill(null)?.map((item, index) => {
                        return (
                            <div key={index}>
                                {index === 0 ? <>
                                    <div className='fw-bold fs-3 mt-3 mb-3'>
                                        Languages
                                    </div>
                                </> : <>
                                    <div>
                                        English
                                    </div>
                                </>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
