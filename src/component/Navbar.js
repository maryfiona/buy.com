

import React from "react";
import  './navbar.css'

const Navbar = () => {
    return (


        <>


            <nav className="navbar navbar-expand-sm bg-dark">

                <div className="container-fluid ">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="http://localhost:3000/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="http://localhost:3000/">ABOUT US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="http://localhost:3000/">SERVICE</a>
                        </li>
                    </ul>
                </div>

            </nav>


        </>

    )

}
export default Navbar;