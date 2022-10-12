import React from "react";

import screenshot from "../../assets/Endless Pawsibilities.png"

const styles = {
    p: {
        color: '#B0C5D1'
    }
}

function Project2() {
    const project = {
        name: "Endless Pawsibilities",
        description: "Endless Pawsibilities is a full-stack application created for our second group project.",
        link: "https://project2-sm.herokuapp.com/"
    }
    return(
        <section>
            <h1 style={styles.p}>{project.name}</h1>
            <p style={styles.p}>{project.description}</p>
            <a href={project.link}>
            <img
            src={screenshot} alt="Endless Pawsibilities screenshot"
            width="604" height="324"/>
            </a>
        </section>
    );
}

export default Project2;