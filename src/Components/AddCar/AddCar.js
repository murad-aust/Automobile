import React, { useContext, useState } from 'react';
import './AddCar.css';
import { InfoContext } from '../../App';
import Navbar from '../Navbar/Navbar';


const AddCar= () => {
    const [info, setInfo] = useContext(InfoContext);

    const [car, setCar] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newCar = { ...car };
        newCar[e.target.name] = e.target.value;
        setInfo(newCar);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
       
        formData.append('file', file);
        formData.append('title', car.title);
        formData.append('description', car.description);

        fetch('http://localhost:5000/addCar', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container ">
           
             <Navbar></Navbar>
            <div className="col-md-10 col-sm-12 p-4 pr-5 ">

                <div style={{backgroundColor: " #E5E5E5" }} >
                <form className="bg-white" style={{borderRadius:'10px'}}  onSubmit={handleSubmit}>
                    <div className="row ">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1" class="form-label">Car Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Car Name" />
                        </div>
                        <div className="col">
                            <label htmlFor="exampleInputEmail1" class="form-label">Brand Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Brand Name" />
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="exampleInputPassword1" class="form-label">Details</label>
                        <textarea onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Enter Details" />
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