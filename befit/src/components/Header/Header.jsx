import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="navbar_wrapper container">
                        <div className="logo">
                            <span>BeFit</span>
                        </div>
                        <ul className="nav_list">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/exercisedetail'}>Exercise</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header