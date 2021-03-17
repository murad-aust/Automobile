import React from 'react';
import b1 from '../../images/bmw1.jpg'
import b2 from '../../images/bmw2.jpg'
import b3 from '../../images/bmw3.jpg'
import Car from './Car';
import './Cars.css'
const cars=[
    {
        id:1,
        brand: 'BMW',
        name: 'Lorem1',
        image: b1,
        details: 'lorem lorem'
    },
    {
        id: 2,
        brand: 'BMW',
        name: 'Lorem',
        image: b2,
        details: 'lorem lorem'
    },
    {
        id: 3,
        brand: 'BMW',
        name: 'Lorem',
        image: b3,
        details: 'lorem lorem'
    }
]


const Cars = () => {

    return (
        <section className='cars container my-5'>
        <div className='row '>
            {
                cars.map((car=> <Car key={car.id} car={car}></Car>))
            }
        </div>
        </section>
    );
};

export default Cars;