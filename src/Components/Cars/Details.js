import React, { useContext } from 'react';
import { CarContext } from '../../App';
import Navbar from '../Navbar/Navbar';

const Details = () => {
    const [car, setCar]=useContext(CarContext)
    return (
        <div className="container">
            <Navbar></Navbar>
            
            <div class="card mx-3 ml-auto">
              <img className="card-img-top px-3 py-3" src={`data:image/png;base64,${car.image.img}`} alt="" />
               
                <div class="card-body">
                    <h5 class="card-title">{car.name}</h5>
                    <p class="card-text"><small class="text-muted">Brand:{car.brand}</small></p>
                     <p class="card-text">{car.details}</p>
                    
                </div>
            </div>
           </div>
        
    );
};

export default Details;