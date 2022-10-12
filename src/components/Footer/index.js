import React from "react";
import image from "../../assets/BackgroundImage.jpg"

const styles = {
    foot: {
      backgroundImage: `url(${image})`,
      color: '#B0C5D1'

    }
  }

function Footer(){

    return(
        <footer style={styles.foot}>
           <a data-testid="link" href="https://github.com/PBranch243">
          View My Github
        </a>
        <a href="https://www.linkedin.com/in/phil-branch-9a354522a/">
          View My LinkedIn 
        </a>
        </footer>
    );
}

export default Footer;