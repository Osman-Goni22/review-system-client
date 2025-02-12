import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NavBar from '../NavBar';
import { Rating } from '@smastrom/react-rating';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from './Auth_Provider/AUthProvider';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';



const MyReviews = () => {
    const [reviews, setReviews] = useState([]);

    const {user} =useContext(AuthContext)


  

    useEffect(() => {
        axios.get(`https://service-system-reviews-server.vercel.app/myReview?email=${user.email}`, {withCredentials:true})
            .then(res => {
                setReviews(res.data);
            
            })
    }, [user.email])
    

    const [revie, setReview]= useState(null);
    const [rating, setRating] = useState(0)
    const [text, setText]= useState('')

    const [rat, setRat]= useState(0)

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        
       axios.put('https://service-system-reviews-server.vercel.app/updateReview', newReview)
      .then(res=>{
        console.log(res.data)
      })
    }

    console.log(rating);
    console.log(text);

    const handleDelete =(indx)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

           let rest= [] ;
            console.log(reviews.length);
         

            reviews.map((review,index)=>{
                if(index!==indx){
                    rest.push(review);
                }
            })

            setReviews(rest)
            //    setReviews(reviews)

                // axios.put('https://service-system-reviews-server.vercel.app/deleteReview')
                // .then(res=>{
                //   console.log(res.data);
                // })

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
         

         
    }



   


    

    

    // const loadedReviews = useLoaderData();
    // console.log(loadedReviews);
   
    return (
        <div className='max-w-6xl mx-auto '>
            <NavBar></NavBar>

            <Helmet>
                <title>MyReviews Page</title>
                <meta name="description" content="Nested component" />
            </Helmet>

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
                                    className="btn  bg-cyan-800 text-white"
                                >
                                    Update
                                </td>
                               <td onClick={()=>handleDelete(indx)} className='btn btn-success'>Delete</td>

                                {/* Unique modal for each review */}
                                <dialog id={`modal_${indx}`} className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">{review.title}</h3>
                                       
                                        <div className="modal-action">
                                            <form >
                                           
                                                <Rating value={review.rating} onChange={setRating}   />
                                                <textarea
                                                    defaultValue={review.review_text}
                                                 
                                                    placeholder="Bio"
                                                    className="textarea textarea-bordered textarea-lg w-full"
                                                    required
                                                ></textarea>
                                                <br />
                                                <input

                                                  
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

            <Footer></Footer>

        </div>

    )
}




export default MyReviews;