
import { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import Banner from './Banner';
import axios from 'axios';
import Service from './Service';
import { motion } from "motion/react"
import osmanImg from '../assets/osmans.jpg'

const Home = () => {

    const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];
    const circleRadius = 150; // Radius of the circular rotation
    const [services, setServices] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/features')
            .then(res => {
                setServices(res.data)
            })
    }, [])

    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Banner></Banner>

            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <Service service={service} key={service._id}></Service>)
                    }
                </div>
            </section>

            <section>

                <div className="relative w-full h-[400px] flex justify-center items-center">


                    {cards.map((card, index) => {
                        const angle = (360 / cards.length) * index; // Calculate angle for each card
                        const x = circleRadius * Math.cos((angle * Math.PI) / 180); // X-coordinate
                        const y = circleRadius * Math.sin((angle * Math.PI) / 180); // Y-coordinate

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
            </section>


            <section>
                <h2 className='text-center mt-5 text-2xl font-bold'>
                    Meet Our Partners
                </h2>
                <div className='w-[400px] shadow-lg'>
                    <img src={osmanImg} alt="" className='w-24 rounded-full mx-auto ' />
                    <h2>Osman Goni</h2>
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
            </section>

        </div>
    );
};

export default Home;