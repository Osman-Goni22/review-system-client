import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../NavBar';
import { Rating } from '@smastrom/react-rating';

const MyReviews = () => {
    const loadedReviews = useLoaderData();
    console.log(loadedReviews);
    const [reviews, setReviews] = useState(loadedReviews);
    return (
        <div className='max-w-6xl mx-auto '>
            <NavBar></NavBar>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-left text-lg font-bold'>Serial</th>
                            <th className='text-left text-lg font-bold'>Service Title</th>
                            <th className='text-left text-lg font-bold'>Text</th>
                            <th className='text-left text-lg font-bold'>Rating</th>
                            <th className='text-left text-lg font-bold'>Review Time</th>
                            <th className='text-left text-lg font-bold'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review, indx) => <tr>
                                <th>{indx+1}</th>
                                <th>{review.title}</th>
                                <td>{review.review_text}</td>
                                <td> <Rating style={{ maxWidth: 200 }} value={review.rating}   /></td>
                                <td>{review.review_time}</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>

    )
}




export default MyReviews;