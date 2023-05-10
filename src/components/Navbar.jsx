import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    const {brand_name,routes} = props
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <p className="navbar-brand">
          {brand_name}
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {routes.map(({name,path},index)=>(
                <NavLink className='nav-link' key={index} to={path}>
                    {name}
                </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
