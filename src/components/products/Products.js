import React from 'react'
import './Product.scss';
import ProductCard from './ProductCard';
import Header from '../../middleware/header/Header';
import Footer from '../../middleware/footer/Footer';
function Products() {


    const data = [
        "https://depotkart.com/images/Plumber.jpg",
        "https://missouripoisoncenter.org/wp-content/uploads/2021/07/windex.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Bix92u2SPDjzGHdrSF4JYYaN2qp4wYmEvTVxnAK85Wsad3b2BKrA3e2MO2x_IxN3Qgo&usqp=CAU",
        "https://depotkart.com/images/Plumber.jpg",
        "https://media.istockphoto.com/id/1146967802/photo/person-cleaning-carpet-with-vacuum-cleaner.jpg?s=612x612&w=0&k=20&c=UJC79wrTWavMoIas1vxjmokR7TawUVNZR7XMqMnCaFQ=",
        "https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg",
        "https://t3.ftcdn.net/jpg/04/80/48/10/360_F_480481061_rld9llq95TvFSMM3vAcacadXeVtiAYa6.jpg",
        "https://depotkart.com/images/Plumber.jpg",
        "https://www.rehau.com/resource/image/381380/7x5/1200/857/550cf4ee1c3ef97c2f7d06b36d2e227b/C3533974F236F5D292044F8E6B247F5D/bau-d327-17795253.jpg"
    ]
    return (
        <div className='main-product'>
            <div>
                <Header />
            </div>
            <div className='inside-main-products mb-5'>

                <div className='row d-flex align-items-center justify-content-center gap-3 mt-4 mb-3'>
                    {data?.map((item, index) => {
                        return <ProductCard item={item} key={index} index={index} />
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
