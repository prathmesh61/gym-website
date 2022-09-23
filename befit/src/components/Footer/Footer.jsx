import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <section>
                <div className="footer container">
                    <div className="footer_wrapper">
                        <div className="footer_left">
                            <h2 className='logo'>BeFit</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor incididunt ut labore dolore<br /> magna aliqua endisse ultrices gravida lorem.</p>
                            <div className="social_media">
                                <Link to={'/facebook'}><i class="ri-facebook-circle-fill"></i></Link>
                                <Link to={'/linkedin'}><i class="ri-linkedin-box-fill"></i></Link>
                                <Link to={'/youtube'}><i class="ri-youtube-fill"></i></Link>
                                <Link to={'/instagram'}><i class="ri-instagram-fill"></i></Link>
                            </div>
                        </div>
                        <div className="footer_right">
                            <h2>Tips & Guides</h2>
                            <p>Physical fitness may help prevent depression, anxiety<br />
                                Fitness: The best exercise to lose belly fat and tone up...
                            </p>
                            <input type="text" placeholder='Join For More' />
                        </div>
                    </div>
                    <p className='footer_end'>Copyright ©2022 All rights reserved | This template is made with <i class="ri-building-fill"></i> by BeFit</p>
                </div>
            </section>

        </>
    )
}

export default Footer