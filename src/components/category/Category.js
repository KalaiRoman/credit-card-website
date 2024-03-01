import React, { useState } from 'react'
import CommonTitle from '../../middleware/Title';

import { useNavigate } from 'react-router-dom';
import './Category.scss';
import { active, beauty, car, home, more, night, res, shopping } from '../../assests/images';
function Category() {


    const navigate = useNavigate();
    const [mores, setMore] = useState(false);
    const data = [
        {
            id: 1,
            name: "Restaurants",
            image: res
        },
        {
            id: 2,
            name: "Shopping",
            image: shopping
        },
        {
            id: 3,
            name: "Nightlife",
            image: night
        },
        {
            id: 4,
            name: "Active Life",
            image: active
        },
        {
            id: 5,
            name: "Beauty & Spas",
            image: beauty
        },
        {
            id: 6,
            name: "Automotive",
            image: car
        },
        {
            id: 7,
            name: "Home Services",
            image: home
        },
        {
            id: 8,
            name: "More",
            image: more
        }
    ]

    const data1 = [
        {
            id: 1,
            name: "Coffee & Tea",
            image: <i class="fa-solid fa-mug-hot"></i>
        },
        {
            id: 2,
            name: "Food",
            image: <i class="fa-solid fa-utensils"></i>
        },
        {
            id: 3,
            name: "Arts & Entertainment",
            image: <i class="fa-solid fa-fill-drip"></i>

        },
        {
            id: 4,
            name: "Health & Medical",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 5,
            name: "Professional Services",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 6,
            name: "Pets",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 7,
            name: "Real Estate",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 8,
            name: "Hotels & Travel",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 9,
            name: "Local Services",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 10,
            name: "Event Planning & Services",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 11,
            name: "Public Services & Government",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 12,
            name: "Financial Services",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 13,
            name: "Education",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 14,
            name: "Religious Organizations",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 15,
            name: "Local Flavor",
            image: <i class="fa-solid fa-people-group"></i>

        },
        {
            id: 16,
            name: "Mass Media",
            image: <i class="fa-solid fa-people-group"></i>

        },

    ]

    const NavigatePath = (id) => {
        navigate(`/products/${id}`)
    }
    return (
        <div className='main-category-section'>
            <div className='inside-category'>

                <div className='mt-5 mb-4'>
                    <CommonTitle title="Category" />
                </div>
                <div className='list-category-section'>
                    <div className='row d-flex gap-5 mx-auto align-items-center justify-content-center'>
                        {data?.map((item, index) => {
                            return (
                                <div className='card list-category-card' key={index}
                                    onClick={() => {
                                        if (item?.name == "More") {
                                            setMore(!mores)
                                        }
                                        else {
                                            NavigatePath(item?.id)
                                        }
                                    }}

                                >
                                    <div>
                                        <img src={item?.image} alt={`no Image ${index + 1}`} />
                                    </div>
                                    <div className='mt-3'>
                                        {item?.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {mores ? <>

                    <div className='list-category-section mb-5'>
                        <div className='row d-flex gap-5 mx-auto align-items-center justify-content-center'>
                            {data1?.map((item, index) => {
                                return (
                                    <div className='list-category-cards' key={index}>
                                        {item?.name}
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </> : null}

            </div>


        </div>
    )
}

export default Category
