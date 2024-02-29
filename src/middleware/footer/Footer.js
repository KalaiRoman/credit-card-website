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
                                texts
                            </div>
                        )
                    })}
                </div>
                <div className='second-footer'>
                    {Array(10)?.fill(null)?.map((item, index) => {
                        return (
                            <div key={index}>
                                texts
                            </div>
                        )
                    })}
                </div>
                <div className='third-footer'>
                    {Array(10)?.fill(null)?.map((item, index) => {
                        return (
                            <div key={index}>
                                texts
                            </div>
                        )
                    })}
                </div>
                <div className='fourth-footer'>
                    {Array(10)?.fill(null)?.map((item, index) => {
                        return (
                            <div key={index}>
                                texts
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer
