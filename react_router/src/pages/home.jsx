import React from "react";
import {useNavigate} from "react-router-dom";

const Home =() =>{
    const navigation = useNavigate();
    const Handeleclick = (e) => {
        e.preventDefault();
        navigation("/about")
    }
    return(
        <div>
            <h1>This in home</h1>
            <h2>go to About</h2>
            <a href="/about" onClick={Handeleclick}>About</a>
        </div>
    )
}
export default Home;