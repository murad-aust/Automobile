import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../Navbar/Navbar';

const NewCar = () => {
  const [cars, setCars] = useState([]);
  const [remove, setRemove] = useState(false);
  const history = useHistory();
  useEffect(() => {
      fetch('http://localhost:5000/newCar')
      .then(res => res.json())
      .then(result => setCars(result))

  },[])

  const handleCarRemove = (id) => {
    fetch(`'http://localhost:5000/delete/${id}`, {
        method: 'DELETE',

    })
        .then(res => res.json())
        .then(result => {
          history.push("/home")

        })

}
  
    return (
      <div className="container">
            <Navbar></Navbar>
            <div>
              {
                cars.map(cars=>(
                  
                  <div key={cars._id} class="card mx-3 ml-auto">
                  <img className="card-img-top px-3 py-3" src={`data:image/png;base64,${cars.image.img}`} alt="" />
                   
                    <div class="card-body">
                        <div>
                            <h5 class="card-title">{cars.name}</h5>
                            <button onClick={() => handleCarRemove(cars._id)} style={{ backgroundColor: '#FF444A', width: '100px', border: 'none', borderRadius: '5px' }}>Remove
                                                    </button>
                        </div>

                        <p class="card-text"><small class="text-muted">Brand:{cars.brand}</small></p>
                         <p class="card-text">{cars.details}</p>
                        
                    </div>
                </div>
                ))
              }
            </div>
           
           </div>
       
    );
};

export default NewCar;