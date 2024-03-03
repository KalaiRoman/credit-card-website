import React from 'react'
import './Product.scss';
import ProductCard from './ProductCard';
import Header from '../../middleware/header/Header';
import Footer from '../../middleware/footer/Footer';
function Products() {
    return (
        <div className='main-product'>

            <div>
                <Header />
            </div>

            <div className='inside-main-products mb-5'>

                <div className='row d-flex align-items-center justify-content-center gap-3 mt-4 mb-3'>
                    {Array(25)?.fill(null)?.map((item, index) => {
                        return <ProductCard {...item} key={index} index={index} />
                    })}
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Products
