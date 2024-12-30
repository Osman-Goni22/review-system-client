import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NavBar from '../NavBar';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { AuthContext } from './Auth_Provider/AUthProvider';
import axios from 'axios';
import moment from 'moment';
const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [rating, setRating] = useState(0)
    const loadedService = useLoaderData();
    const [service, setService] = useState(loadedService)
    console.log(service ? service : 'nai');
    console.log(rating);

    const handleReview = e => {
        e.preventDefault();
        const review_text = e.target.review_text.value;

        let review_time = moment().format('LLL');
        const newReview = {
            review_text,
            rating,
            review_time
        }

        console.log(newReview);

        if (service.review_List.length) {
            service.review_List.push(newReview)
        }
        else {

            service.total_reviews = [newReview]
        }

        axios.put(`http://localhost:3000/addReview/${service._id}`, service)
            .then(res => {
                console.log(res.data);
            })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="card bg-base-100 shadow-xl p-5 relative hover:-z-40 md:w-1/2 mx-auto">
                <figure>
                    <img
                        src={service.photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="flex justify-around">
                        <h2 className='text-2xl font-bold'>
                            {
                                service.title
                            }

                        </h2>

                        <div className="badge badge-secondary">{service.price}$</div>
                        <div > review-count:{service.review_count}</div>

                    </h2>
                    <p>{service.description}</p>
                    <div className="card-actions justify-center">
                        <p>{service.category}</p>
                        <p>{service.company}</p>
                        <p>visit:{service.website}</p>
                        <p>By: {service.addedBy}</p>
                        <p>{service.now}</p>
                    </div>
                </div>

                {
                    service.review_count ? <div>

                        <h2>{
                            service.review_List.map(singleReview => <div>
                                <img src={user?.photoURL} className='w-12 rounded-full ' alt="" />
                                <h2>{user?.displayName}</h2>
                                <h2>{singleReview.review_text}</h2>
                            </div>)
                        }
                        </h2>
                    </div> : 'No Review'
                }

                <div className='mx-auto'>
                    <h2>Add Review:</h2>
                    <form onSubmit={handleReview}>
                        <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
                        <textarea
                            name='review_text'
                            placeholder="Bio"
                            className="textarea textarea-bordered textarea-lg w-full max-w-xs" required></textarea>
                        <br />

                        <input type="submit" value="Add Review" className='btn btn-success mx-auto' />


                    </form>
                </div>

            </div>


        </div >
    );
};

export default ServiceDetails;