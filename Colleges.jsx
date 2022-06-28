import { useState } from 'react'
import axios from "axios";
import "./Colleges.css"

export const Colleges = () => {
const [college, setCollege] = useState({name:"", tagline:"", mobile:"", street:"", city:"", pincode:""});
const [formError, setFormError] = useState(false);
 const handleOnChange = (e) =>{
   setCollege({...college, [e.target.name]: e.target.value });
}

    const handleCollegeSubmit = (e) => {
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
    axios.post(
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
        const college = response.data.data.savedCollege;
        setCollege([...Colleges, college]);
      }
    }).catch((error) => {
      console.error(error.response.data.message)
      setFormError(true)
});
  }
    
  // const handleCollegeDelete = (collegeId) =>{
  //  const filteredColleges = colleges.filter(({ id }) => id === collegeId);
  //  setColleges(filteredColleges);
  // }  

  return (
    <div className='college'>
     
      <div className="college_header">
        <h1 className='page-title'>ADD YOUR COLLEGE</h1>
      </div> 
      <div className="todos_footer">
        <form className='college-form'
            onSubmit={handleCollegeSubmit}
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
        onChange={handleOnChange}
        />
        </div>

        <div className='input-group'>
            <label htmlFor='address'> Enter College Address </label>      
        <input
        className="input-control"
        type="text" 
        name="street" 
        id="address" 
        placeholder='Street' 
        value={college.address} 
        onChange={handleOnChange}
        />
        <input
        className="input-control"
        type="text" 
        name="city" 
        id="address" 
        placeholder='city' 
        value={college.city} 
        onChange={handleOnChange}
        />
        <input
        className="input-control"
        type="text" 
        name="pincode" 
        id="address" 
        placeholder='pincode' 
        value={college.pincode} 
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
