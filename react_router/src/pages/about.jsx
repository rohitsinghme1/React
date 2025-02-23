import React from "react";
import {useNavigate,} from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const HandleClick = (e) => {
        e.preventDefault();
        navigate("/ ");
    }
    return (
        <div>
            <h1>this is About Page</h1>
            <h2>Go to home</h2>
            <a href="/" onClick={HandleClick}>Home</a>
        </div>
    )
}
export default About;