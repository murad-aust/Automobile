import React, { useEffect, useState } from 'react';
import b1 from '../../images/bmw1.jpg'
import b2 from '../../images/bmw2.jpg'
import b3 from '../../images/bmw3.jpg'
import Car from './Car';
import './Cars.css'


const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/car')
        .then(res => res.json())
        .then(result => setCars(result))

    },[])

    return (
        <section className='cars container my-5'>
        <div className='row '>
            {
                cars.map((cars=> <Car key={cars._id} cars={cars}></Car>))
            }
        </div>
        </section>
    );
};

export default Cars;