import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../NavBar';
import { Rating } from '@smastrom/react-rating';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from './Auth_Provider/AUthProvider';



const MyReviews = () => {
    const [reviews, setReviews] = useState([]);

    const {user} =useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:3000/myReview?email=${user.email}`, {withCredentials:true})
            .then(res => {
                setReviews(res.data);
            
            })
    }, [user.email])
    

    const [revie, setReview]= useState(null);
    const [rating, setRating] = useState(0)
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        const newReview = {
            review_text: data.review_text,
            rating:rating,
            review_time:revie.review_time,
            id:revie.id,
            userName:revie.userName,
            userPhoto:revie.userPhoto,
            userEmail:revie.userEmail,
            review_id:revie.review_id,
            title:revie.title,
        }

        console.log(newReview)
       axios.put('http://localhost:3000/updateReview', newReview)
      .then(res=>{
        console.log(res.data)
      })
    }

    const handleDelete =(review)=>{
          axios.put('http://localhost:3000/deleteReview', review)
          .then(res=>{
            console.log(res.data);
          })

         
    }



    console.log(rating);
    const handleUpdate = (review) => {
       



        document.getElementById("my_modal_1").showModal();
    }


    

    

    // const loadedReviews = useLoaderData();
    // console.log(loadedReviews);
   
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

                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <tbody>
                        {reviews?.map((review, indx) => (
                            <tr key={indx}>
                                <th>{indx + 1}</th>
                                <th>{review.title}</th>
                                <td>{review.review_text}</td>
                                <td>
                                    <Rating style={{ maxWidth: 200 }} value={review.rating} />
                                </td>
                                <td>{review.review_time}</td>
                                <td
                                    onClick={() =>
                                        document.getElementById(`modal_${indx}`).showModal()
                                    }
                                    className="btn btn-primary"
                                >
                                    Update
                                </td>
                               <td onClick={()=>handleDelete(review)} className='btn btn-success'>Delete</td>

                                {/* Unique modal for each review */}
                                <dialog id={`modal_${indx}`} className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">{review.title}</h3>
                                        <div className="">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <Rating value={rating} onChange={setRating} />
                                                <textarea
                                                    defaultValue={review.review_text}
                                                    {...register("review_text")}
                                                    placeholder="Bio"
                                                    className="textarea textarea-bordered textarea-lg w-full"
                                                    required
                                                ></textarea>
                                                <br />
                                                <input
                                                    onClick={() =>setReview(review)}
                                                    type="submit" className='btn'
                                                    value="Update"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>

    )
}




export default MyReviews;