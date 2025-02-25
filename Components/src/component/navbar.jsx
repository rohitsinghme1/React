// import React from 'react';
// import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {Home, Menu} from "lucide-react"
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const NavItems = [
        {name : "Dashboard",icon:Home},
        {name : "Menu",icon:Menu},

    ]
    return (
        <div>
            <button className="btn btn-dark" onClick={() => setIsOpen(!isOpen)}>
                <Menu size={24} />
            </button>
        </div>
    );
}
export default Navbar;