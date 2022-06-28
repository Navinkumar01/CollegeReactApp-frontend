import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => (
  <menu className="navbar" data-testid="navbar">
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/"}>
        Home
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/colleges"}>
        College Add Form
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/college-edit"}>
        College Edit Form
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/sign-in"}>
        Sign In
      </NavLink>
    </li>
    <li className="navbar-item">
      <NavLink className="navbar-link" to={"/sign-up"}>
        Sign Up
      </NavLink>
    </li>
  </menu>
);