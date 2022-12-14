import React from "react";

// import screenshot from "../../assets/<imgfile>"

const styles = {
    p: {
        color: '#B0C5D1'
    }
}

function Project3() {
    const project = {
        name: "Github-Lite",
        description: "Github-Lite was created as the final group project in my bootcamp.",
        link: "https://github-lite-1.herokuapp.com/"
    }
    return(
        <section>
            <h1 style={styles.p}>{project.name}</h1>
            <p style={styles.p}>{project.description}</p>
            <a href={project.link}>
            {/* <img
            src={screenshot} alt="screenshot"
            width="604" height="324"/> */}
            </a>
        </section>
    );
}

export default Project3;