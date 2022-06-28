import { useState } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export const SignUp = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ title: "", name: "", email: "", password: ""});
    const [formError, setFormError] = useState(false)

    const handleOnChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value });
    }

    const handleUserRegistration = (e) =>{
        e.preventDefault();
        if(user.title.trim().length === 0 ||
           user.name.trim().length === 0  ||
           user.email.trim().length === 0 ||
           user.password.trim().length === 0){
             setFormError(true);
            return;
         }
         setFormError(false);
         axios.post
         ("http://localhost:5000/user/signup", user, {
            headers: {"content-type": "application/json"},

        })
        .then((response) => {
            if (response.data.success){
                setUser({title:"", name:"", email:"", password:""})
                navigate("/sign-in");
            }
        })
        .catch((error) => {
            setFormError(true);
    });
}

  
    return (
        <div className='sign-up auth container'>
            <form className="auth-form sign-up-form spaced-form"
              onSubmit={handleUserRegistration}>
                <h2 className="text-center page-title"> Sign Up</h2>
                <div className="input-group">
                    <label htmlFor='title'>Title</label>
                    <input
                        className="input-control"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Salutation"
                        value={user.title}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor='username'>Enter Your Name</label>
                    <input
                        className="input-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="what should we call you?"
                        value={user.name}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor='username'>Enter your username</label>
                    <input
                        className="input-control"
                        type="email"
                        name="email"
                        id="username"
                        placeholder="Enter your email address"
                        value={user.email}
                        onChange={handleOnChange}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor='password'>Enter your secret password</label>
                    <input
                        className="input-control"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your secret code"
                        value={user.password}
                        onChange={handleOnChange}
                    />
                </div>
                <div className='input-group'>
        <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
            </form>
            {formError ? <div className="alert alert-danger">
                <p className="alert-message">Invalid user details. Please verify
                once and resubmit.</p>
            </div> : null}
        </div>
    )
}
