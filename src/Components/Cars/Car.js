import React, { useContext } from 'react';
import { InfoContext } from '../../App';
import { useHistory } from "react-router-dom"


const Car = (props) => {
    const {brand, name, image,details}= props.car;
    const history = useHistory();
     const [info, setInfo]=useContext(InfoContext)
     const detail = () =>{
         setInfo(props.car);
         console.log('onclick')
         history.push("/details");

     }
         return (
        <div  className=" col-md-4"  >
        
          <div className="card  mb-5 "  >
              <div className="card-header">
                  <img className="img" src={image} alt="" />
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