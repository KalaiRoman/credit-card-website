import React from 'react'
import './Product.scss';
import ProductCard from './ProductCard';
function Products() {
    return (
        <div className='main-product'>


            <div className='inside-main-products mb-5'>
                <div className='row d-flex align-items-center justify-content-center gap-3 mt-4 mb-3'>
                    {Array(25)?.fill(null)?.map((item, index) => {
                        return <ProductCard {...item} key={index} index={index} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default Products
