import React from "react";
import Nav from "../Nav";
import image from "../../assets/BackgroundImage.jpg"
import philsml from "../../assets/phil-small.jpg"

const styles = {
  head: {
    backgroundImage: `url(${image})`
  }
}

function Header() {

  return (
    <header className="flex-row px-1" style={styles.head}>
      <h2>
        <img src={philsml} alt="Avatar" className="avatar"/>
        <a data-testid="link" href="/">
          Web Developer -- Phil Branch
        </a>
      </h2>

      <Nav></Nav>
    </header>
  );
}

export default Header;