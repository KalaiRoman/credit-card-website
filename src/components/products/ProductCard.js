import React from 'react'
import './Product.scss'
import { useNavigate } from 'react-router-dom';
function ProductCard({ index, item }) {

    const navigate = useNavigate();

    const ViewProduct = () => {
        navigate(`/view/${index}`)
    }
    return (
        <>
            <div className='card-image mb-4 mt-3 cursor' onClick={ViewProduct}>

                <div>

                    {/* {index % 2 === 0 ? <>

                        <img className='burger-image' src="h-fries-generated-by-artificial-intelligence_25030-63181.jpg" alt="no image" />

                    </> : <>
                        <img className='burger-image' src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D" alt="no image" />

                    </>} */}

                    <img className='burger-image' src={item} alt="no image" />


                </div>
                <div className='mt-2 fw-bold fs-4'>
                    Cleaner
                </div>
            </div>
        </>
    )
}

export default ProductCard
