import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";

export const Header = () => {
   

  return (
    <header className=" ">
   
      <nav className="flex justify-end gap-2 mb-2 mr-3 mt-4 text-bold">
      
        <ul className="flex flex-wrap items-center">
       
          <li className="mb-2 md:mb-0">
            <NavLink to="/" className="nav-link" >Home</NavLink>
          </li>
          <li  className="mb-2 md:mb-0">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li  className="mb-2 md:mb-0">
            <NavLink to="/Contacts" className="nav-link">Contacts</NavLink>
          </li >
          <li  className="mb-2 md:mb-0">
            <NavLink to="/login" className="nav-link">LogIn</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
