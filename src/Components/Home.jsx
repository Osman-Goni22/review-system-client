
import { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar';
import Banner from './Banner';
import axios from 'axios';
import Service from './Service';
import { motion } from "motion/react"
import osmanImg from '../assets/osmans.jpg'
import Footer from './Footer';
import Lottie from 'lottie-react';
import lottie1 from '../assets/Lottie/lottie1.json'
import lottie2 from '../assets/Lottie/lottie2.json'
import lottie3 from '../assets/Lottie/lottie3.json'
import CountUp from 'react-countup';
import { AuthContext } from './Auth_Provider/AUthProvider';
import { Helmet } from 'react-helmet';
const Home = () => {

    const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
    const circleRadius = 150; // Radius of the circular rotation
    const [services, setServices] = useState([])
    const [bestServices, setBestServices] = useState([])
    const { users } = useContext(AuthContext)
    const [totalServices, setTotalServices] = useState([]);
    const [review, setReview] = useState(0);


    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(100)

    useEffect(() => {
        axios.get('https://service-system-reviews-server.vercel.app/features')
            .then(res => {
                setServices(res.data)

            })
    }, [])

    useEffect(() => {
        axios.get('https://service-system-reviews-server.vercel.app/services', { withCredentials: true })
            .then(res => {
                setEnd(res.data.length);
                setTotalServices(res.data)
                let count = 0;
                console.log(res.data);
                for (let service of res.data) {
                    if (service.review_count) {
                        count = count + parseInt(service.review_count);
                    }



                }

                setReview(count);
                console.log(count);
            })
    }, [])


    useEffect(() => {
        axios.get('https://service-system-reviews-server.vercel.app/best')
            .then(res => {
                setBestServices(res.data)
                // const services = res.data;
                // const bestServices = services.sort((a,b)=>(a.review_count-b.review_count))
                // console.log(bestServices);
            })
    }, [])

    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>

            <div className='grid lg:grid-cols-3  justify-center gap-5'>
                <div className='text-center mt-5'>
                    <p className='text-xl font-bold'>Number of Services available:</p>
                    <CountUp start={start} end={end} duration={5}></CountUp>
                </div>
                <div className='text-center mt-5'>
                    <p className='text-xl font-bold'>Number of Reviews in Our Website:</p>
                    <CountUp start={start} end={review} duration={5}></CountUp>
                </div>

            </div>
            <Banner></Banner>

            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Nested component" />
            </Helmet>


            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <Service service={service} key={service._id}></Service>)
                    }
                </div>
            </section>

            <section>
                <h2 className='text-center mt-5 text-2xl font-bold'>New Year Discount On all Services</h2>
                <div className='grid lg:grid-cols-3'>
                    <Lottie animationData={lottie1} ></Lottie>
                    <Lottie animationData={lottie2} ></Lottie>
                    <Lottie animationData={lottie3}></Lottie>
                </div>
            </section>

            <section>
                <h2 className='text-center mt-5 text-2xl font-bold'>Most Reviewed Services</h2>
                <div className='grid lg:grid-cols-3 gap-5 mt-5'>
                    {
                        bestServices.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>

            </section>

            {/* <section>

                <div className="relative w-full h-[400px] flex justify-center items-center">


                    {cards.map((card, index) => {
                        const angle = (360 / cards.length) * index;
                        const x = circleRadius * Math.cos((angle * Math.PI) / 180);
                        const y = circleRadius * Math.sin((angle * Math.PI) / 180);

                        return (
                            <motion.div
                                key={index}
                                className="absolute w-[100px] h-[150px] bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg"
                                initial={{
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                }}
                                animate={{
                                    x,
                                    y,
                                    rotate: angle,
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                            >
                                {card}
                            </motion.div>
                        );
                    })}
                </div>
            </section> */}


            <section>
                <h2 className='text-center mt-5 text-2xl font-bold'>
                    Meet Our Partners
                </h2>
                <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 justify-between'>
                    <div className='w-[400px] shadow-lg p-5 mt-5'>
                        <img src={osmanImg} alt="" className='w-16 rounded-full mx-auto ' />
                        <h2 className='text-center '>Osman Goni</h2>
                        <h2>CEO (Chief Executive Officer)</h2>
                        <p>Osman is a renowned architect interior designer, known for his innovative and sustainable design </p>
                        <div>
                            <h2>
                                Role: Interact with users by responding to queries or comments.
                            </h2>
                            <h1>Impact:</h1>
                            <h2>
                                Builds an active, engaging community.
                                Encourages repeat visits and user retention.
                            </h2>
                        </div>
                    </div>
                    <div className='w-[400px] shadow-lg p-5 mt-5'>
                        <img src="https://i.ibb.co.com/zVX3C3Y/John-Williams-2024.jpg" alt="" className='w-16 rounded-full mx-auto ' />
                        <h2 className='text-center '>John Williams</h2>
                        <h2>CEO (Chief Executive Officer)</h2>
                        <p>Osman is a renowned architect interior designer, known for his innovative and sustainable design </p>
                        <div>
                            <h2>
                                Role: Interact with users by responding to queries or comments.
                            </h2>
                            <h1>Impact:</h1>
                            <h2>
                                Builds an active, engaging community.
                                Encourages repeat visits and user retention.
                            </h2>
                        </div>
                    </div>
                    <div className='w-[400px] shadow-lg p-5 mt-5'>
                        <img src="https://i.ibb.co.com/5W0kbQm/Alex-Immerman.png" alt="" className='w-16 rounded-full mx-auto ' />
                        <h2 className='text-center '>Hellen Alex</h2>
                        <h2>CEO (Chief Executive Officer)</h2>
                        <p>Osman is a renowned architect interior designer, known for his innovative and sustainable design </p>
                        <div>
                            <h2>
                                Role: Interact with users by responding to queries or comments.
                            </h2>
                            <h1>Impact:</h1>
                            <h2>
                                Builds an active, engaging community.
                                Encourages repeat visits and user retention.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>

        </div>
    );
};

export default Home;