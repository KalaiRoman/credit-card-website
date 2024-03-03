import React from 'react'
import './Footer.scss';
function Footer() {
    return (
        <div className='main-footer'>
            <div className='inside-footer-section'>
                <div className='first-footer'>
                    {Array(10)?.fill(null)?.map((item, index) => {
                        return (
                            <div key={index}>

                                {index === 0 ? <>
                                    <div className='fw-bold fs-3 mt-3 mb-3'>
                                        About
                                    </div>
                                </> : <>
                                    <div>
                                        Texts
                                    </div>
                                </>}


                            </div>
                        )
                    })}
                </div>
                <div className='second-footer'>
                    {Array(10)?.fill(null)?.map((item, index) => {
                        return (
                            <div key={index}>
                                {index === 0 ? <>
                                    <div className='fw-bold fs-3 mt-3 mb-3'>
                                        Discover
                                    </div>
                                </> : <>
                                    <div>
                                        Texts
                                    </div>
                                </>}
                            </div>
                        )
                    })}
                </div>
                <div className='third-footer'>
                    {Array(10)?.fill(null)?.map((item, index) => {
                        return (
                            <div key={index}>
                                {index === 0 ? <>
                                    <div className='fw-bold fs-3 mt-3 mb-3'>
                                        Card for Business
                                    </div>
                                </> : <>
                                    <div>
                                        Texts
                                    </div>
                                </>}
                            </div>
                        )
                    })}
                </div>
                <div className='fourth-footer'>
                    {Array(10)?.fill(null)?.map((item, index) => {
                        return (
                            <div key={index}>
                                {index === 0 ? <>
                                    <div className='fw-bold fs-3 mt-3 mb-3'>
                                        Languages
                                    </div>
                                </> : <>
                                    <div>
                                        Texts
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
