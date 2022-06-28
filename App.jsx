
import { Routes, Route} from "react-router-dom"
import { Colleges } from "../colleges/Colleges";
import {CollegeEdit} from "../college-edit/CollegeEdit";
import './App.css';
import { Navbar } from "../common/navbar/Navbar";
import { SignIn } from "../sign-in/SignIn";
import { SignUp } from "../sign-up/SignUp";


const App = () => {
  const appStyles = {
  };
  return (
    <div className="app" style={appStyles}>
      <header className="head">
        <Navbar/>
        </header>
        <main className="main">
    <Routes>
    <Route path="/colleges" element={<Colleges />}/>
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/college-edit" element={<CollegeEdit />} />
    <Route path="/" element={<h1 align='center'>Welcome to OneStop College Find</h1>} />
    </Routes>

        </main>

  

    </div>
  );
}

export default App;
