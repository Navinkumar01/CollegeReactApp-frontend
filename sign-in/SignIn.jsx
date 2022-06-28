import { useState } from "react";
import axios from "axios";
import "./SignIn.css";

export const SignIn = () => {
    const [user, setUser] = useState({ email: "", password: ""});
    const [formError, setFormError] = useState(false);
    const handleOnChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value });
    }
    const handleUserLogin = (e) =>{
        e.preventDefault();
        if(
           user.email.trim().length === 0 ||
           user.password.trim().length === 0
          )
        {
            setFormError(true);
            return;
         }
         setFormError(false);
         axios.post
         ("http://localhost:5000/user/login", user, {
            headers: {"content-type": "application/json"},
        })
        .then((response) => {
            if (response.data.success){
                setUser({email:"", password: "" });
                const token = response.data.data.token;
                localStorage.setItem("accessToken", token);
                sessionStorage.setItem("accessToken", token);
    
            }
        })
        .catch((error) => {
            console.error(error.response.data.message)
            setFormError(true);
    });
    };


  
    return (
        <div className='sign-in'>
            <form className="sign-in-form spaced-form"
             onSubmit={handleUserLogin}>
                <h2 className="text-center page-title"> Sign In</h2>
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
                <div className='input'>
        <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
            </form>
            {formError?(
                <div className="alert-msg">
                    <p>Invalid</p>
                </div>
            ):null}
        </div>
    )
}