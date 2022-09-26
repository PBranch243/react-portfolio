import React from "react";

function Nav() {

    return(
    //    this nav from module project, change out nav links and styling
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="#about"
            //    onClick={() => setContactSelected(false)}
               >
                About me
              </a>
            </li>
            
            {/* following lines commented out until I can add the logic for new categories, this was taken from the module project photo-port */}

            {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li> */}
            {/* {categories.map((category) => (
              <li
                className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                  }`}
                key={category.name}
              >
                <span onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
                >
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            )
            )} */}
          </ul>
        </nav>
    
    );
}

export default Nav;