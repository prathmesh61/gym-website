import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter } from "react-router-dom";
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        {/* <ExerciseDetail /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
