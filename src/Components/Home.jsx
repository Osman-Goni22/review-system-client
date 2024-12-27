
import { useEffect, useState } from 'react';
import NavBar from '../NavBar';
import Banner from './Banner';
import axios from 'axios';
import Service from './Service';

const Home = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/features')
        .then(res=>{
            setServices(res.data)
        })
    },[])

    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Banner></Banner>

            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                  {
                    services.map(service=><Service service={service} key={service._id}></Service>)
                  }
                </div>
            </section>
          
        </div>
    );
};

export default Home;