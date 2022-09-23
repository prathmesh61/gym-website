import React from 'react'
import './Hero.css'
import heroimg from '../../assets/hero.png'
import banner from '../../assets/banner.png'

const Hero = () => {
    return (
        <div>
            <main>
                <div className="hero">
                    <div className="hero_wrapper container">
                        <div className="hero_content">
                            <span>Find Your Energy</span>
                            <h1>MAKE YOUR BODY HEALTHY & FIT</h1>
                            <p>Gymhen an unknown printer took a galley of type and scrambled.</p>
                            <button className="btn">Join Now</button>
                        </div>
                        <div className="hero_img">
                            <img src={banner} alt="" />
                        </div>
                        {/* <div className="bg-shape"></div> */}
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Hero