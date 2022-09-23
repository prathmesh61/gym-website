import React from 'react'
import Exercise from '../components/Exercise/Exercise'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero.'
import './Home.css'
import {
    Routes,
    Route,
} from "react-router-dom";
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Exercise />
            <Footer />
        </div>
    )
}

export default Home
