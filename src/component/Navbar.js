import React, { Fragment,useState } from "react";
import '../CSS/Navbar.css'
const Navbar = () => {

    const [showMenu,setShowMenu]=useState(false)
    
  return (
    
    <Fragment>
      <nav>
        <h1>DownTown</h1>
        <div className={showMenu ? "menu mobile-menu": "menu"}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Agents</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
          <div className="btn">
            <a href="/">Add Property</a>
          </div>
        </div>
        <svg  onClick={()=>{
            setShowMenu(!showMenu)
        }}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </nav>
    </Fragment>
  );
};

export default Navbar;
