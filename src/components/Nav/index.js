import React from "react";

function Nav() {

    return(
    
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a href="#about"
               >
                About me
              </a>
            </li>
            <li className="mx-2">
              <a href="#projects">
                My Work
              </a>
            </li>
            
          </ul>
        </nav>
    
    );
}

export default Nav;