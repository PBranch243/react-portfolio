import React from "react";
import image from "../../assets/BackgroundImage.jpg"

const styles = {
    foot: {
      backgroundImage: `url(${image})`
    }
  }
function Footer(){

    return(
        <footer style={styles.foot}>This is the footer for now.</footer>
    );
}

export default Footer;