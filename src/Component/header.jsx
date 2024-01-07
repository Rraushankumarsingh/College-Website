import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";

export const Header = () => {
   

  return (
    <header className=" ">
   
      <nav>
      
        <ul className="flex justify-end gap-16 mb-2 mr-3 mt-4 text-bold hover:opacity-80 bg-[#13183f] rounded-3xl text-white font-bold py-2 px-4 group relative overflow-hidden">
       
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/Contacts">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/login">LogIn</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
