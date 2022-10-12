import React from "react";

import screenshot from "../../assets/screencapture-file-Users-carlypritchard-Documents-trivia-trainer-index-html-2022-06-22-16_30_45.png"

const styles = {
    p: {
        color: '#B0C5D1'
    }
}

function Project1() {
    const project = {
        name: "Trivia Trainer",
        description: "Trivia Trainer was created as a group project in my bootcamp.",
        link: "https://cjpritch.github.io/trivia-trainer/"
    }
    return(
        <section>
            <h1 style={styles.p}>{project.name}</h1>
            <p style={styles.p}>{project.description}</p>
            <a href={project.link}>
            <img
            src={screenshot} alt="trivia trainer screenshot"
            width="604" height="324"/>
            </a>
        </section>
    );
}

export default Project1;