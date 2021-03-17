import React, { useContext } from 'react';
import { InfoContext } from '../../App';
import Navbar from '../Navbar/Navbar';

const Details = () => {
    const [info,setInfo]=useContext(InfoContext)
    return (
        <div className="container">
            <Navbar></Navbar>
            
            <div class="card mx-3 ml-auto">
                <img src={info.image} class="card-img-top px-3 py-3"  alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{info.name}</h5>
                    <p class="card-text"><small class="text-muted">Brand:{info.brand}</small></p>
                     <p class="card-text">{info.details}</p>
                    
                </div>
            </div>
           </div>
        
    );
};

export default Details;