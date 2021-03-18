import React, { useContext } from 'react';
import { CarContext } from '../../App';
import { useHistory } from "react-router-dom"


const Car = ({cars}) => {
    const {brand, name, image,details}= cars;
    console.log(cars)
    const history = useHistory();
     const [car, setCar]=useContext(CarContext)
     const detail = () =>{
         setCar(cars);
         console.log('onclick')
         history.push("/details");

     }
         return (
        <div  className=" col-md-4"  >
        
          <div className="card  mb-5 "  >
              <div className="card-header">
                  <img className="img" src={`data:image/png;base64,${image.img}`} alt="" />
                
              </div>
          
          <div className="card-body ">
              <h6 style={{color:'black'}}>{name}</h6>
          </div>
          <div className="card-footer">
                <button onClick={detail} className="btn btn-primary">Details</button>
          </div>
     
      </div>
      </div>
    );
};

export default Car;