import React from "react"
import Nav from "react-bootstrap/Nav"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./navBar.styles.css"

import Logo from "./logo/logo"

const Navbar = () => {
    const navItems = [
        {text:'Home',ref:'/home'},
        {text:'About',ref:'/about'},
        {text:'Contact us',ref:'/contact'},
        {text:'Blog',ref:'blog'},
        ]

    return(
        <div>
            <Logo/>
            <p>It's new linking</p>
            
            <Nav className="justify-content-center" activeKey="/home">
                {navItems.map( (nav, idx) => <Nav.Item key={idx}>
                    <Nav.Link href={nav.ref}>{nav.text}</Nav.Link>
                    </Nav.Item>)
                }
            </Nav>
        </div>
        
    )
}

export default Navbar