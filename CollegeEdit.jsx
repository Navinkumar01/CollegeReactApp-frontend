import { useState } from 'react'
import axios from "axios";


export const CollegeEdit = () => {
const [college, setCollege] = useState({name:"", tagline:"", mobile:"", address:""});
const [formError, setFormError] = useState(false);
const handleOnChange = (e) =>{
setCollege({...college, [e.target.name]: e.target.value });
    }
    const handleEditSubmit = (e) => {
          e.preventDefault();
          if(
             college.name.trim().length === 0 ||
             college.tagline.trim().length === 0 ||
             college.mobile.trim().length === 0 ||
             college.street.trim().length === 0 ||
             college.city.trim().length === 0 ||
             college.pincode.trim().length === 0
            )
          {
              setFormError(true);
              return;
           }
           setFormError(false);
    
        const token = localStorage.getItem("accessToken");
        axios.put(
          "http://localhost:5000/College", 
          college, 
          {
          headers: {
            "content-type": "application/json",
             "authorization": `Bearer ${token}`,
          }
        }
        ).then(response =>{
          if(response.data.success){
            const college = response.data.data.updatedCollege;
            setCollege([...CollegeEdit, college]);
          }
        }).catch((error) => {
          console.error(error.response.data.message)
          setFormError(true)
    });
      } 
      return (
        
        <div className='college'>
         
          <div className="college_header">
            <h1 className='page-title'> EDIT COLLEGE DETAILS</h1>
          </div> 
          <div className="todos_footer">
            <form className='college-form'
                onSubmit={handleEditSubmit}
                >
    
            <div className='input-group'>
              <label htmlFor='name'>Enter Your College_Name</label>
            <input
              className="input-control"
              type="text"
              name="name"
              id="name"
              placeholder="Enter College Name"
              value={college.name}
              onChange={handleOnChange}
              />
              </div>
    
              <div className='input-group'>
                <label htmlFor='tagline'> Enter Tagline </label>      
            <input
            className="input-control"
            type="text" 
            name="tagline" 
            id="tagline" 
            placeholder='make a mark' 
            value={college.tagline} 
            onChange={handleOnChange}
            />
            </div>
    
            <div className='input-group'>
                <label htmlFor='mobile'> Enter College Contact</label>      
            <input
            className="input-control"
            type="text" 
            name="mobile" 
            id="mobile" 
            placeholder='enter your contact' 
            value={college.mobile}
            onChange={"handleOnChange"}
            />
            </div>
    
           <div className='input-group'>
              <label htmlFor='address'> Enter College Address </label>      
            <input
            className="input-control"
            type="text" 
            name="address" 
            id="address" 
            placeholder='Street' 
            value={college.address} 
            onChange={handleOnChange}
            />
           </div>
            
             <div className='input-group'>
            <button type="submit" className='btn btn-primary'>Submit</button>
            </div>
          </form>
          </div>
           {formError?(
            <div className="alert-msg">
                        <p>Invalid</p>
                    </div>
                 ):null} 
           </div>
       );
    }
    