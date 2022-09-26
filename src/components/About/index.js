import React from "react";
// for example we import the bootstrap button and add it below the p element.  now commented out, this is a learning note for myself
// import { Button } from 'react-bootstrap'
const styles = {
    p: {
        color: '#B0C5D1'
    }
}

export default function About() {

    return (
        <div style={styles.p}>
            <p>Phil Branch is a budding web developer located in St. Louis, MO. Currently participating in a coding bootcamp
                through Washington University, he has been honing his skills dilligently and looks forward to helping you meet
                your web development needs. Here you'll find links to a few of his projects.</p>
                {/* <Button className= {'primary'} ></Button> */}
        </div>
    );
}
