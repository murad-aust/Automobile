import React, { useContext, useState } from 'react';
import './AddCar.css';
import { CarContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import { useHistory } from 'react-router';


const AddCar= () => {
    const [car, setCar] = useContext(CarContext);

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const history = useHistory();

    const handleBlur = e => {
        const newCar = { ...info };
        newCar[e.target.name] = e.target.value;
        setInfo(newCar);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        console.log(info)
       
        const formData = new FormData()
       
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('brand', info.brand);
        formData.append('details', info.details);

        fetch('http://localhost:5000/addCar', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.push("/newCar")
            })
            .catch(error => {
                console.error(error)
            })
        e.preventDefault()
    }
    return (
        <section className="container ">
           
             <Navbar></Navbar>
            <div className="col-md-10 col-sm-12 p-4 pr-5 ">

                <div style={{backgroundColor: " #E5E5E5" }} >
                <form className="bg-white" style={{borderRadius:'10px'}}  onSubmit={handleSubmit}>
                    <div className="row ">
                        <div className="col">
                            <label  className="form-label">Car Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Car Name" />
                        </div>
                        <div className="col">
                            <label  className="form-label">Brand Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="brand" placeholder="Enter Brand Name" />
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Details</label>
                        <textarea onBlur={handleBlur} type="text" className="form-control" name="details" placeholder="Enter Details" />
                    </div>
                       <div className="mb-3 ">
                            <input type="file" onChange={handleFileChange} id="upload-btn"  hidden/>
                            <label className='upload' htmlFor="upload-btn"> Upload Car Image</label>
                            
                        </div>
                    
 
                    <div className="">
                         <button type="submit" className="btn btn-success mt-1 ">Submit</button>
                    </div>
                    
                </form>
                </div>
                
            </div>
            
        </section>
    );
};

export default AddCar;