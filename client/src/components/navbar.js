import React from "react";

// We import bootstrap to make our application look better.
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {

    const h1Style = {
        "fontFamily": 'cursive',
        "background-image": "linear-gradient(45deg, #553c9a, #ee4b2b)",
        "color": "transparent",
        "background-clip": "text",
        "-webkit-background-clip": "text",
        "padding": "10px"
    }

 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink style={{"width" : 75 + "%"}} className="navbar-brand" to="/">
        <h1 style={h1Style}>Employee Tracker</h1>
       </NavLink>
  
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="btn btn-dark" to="/create">
               Create Record
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}