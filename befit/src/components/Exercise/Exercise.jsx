import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Exercise.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Exercise = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);

    const keys = ['gifUrl', 'bodyPart', 'equipment', 'target']


    const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
            'X-RapidAPI-Key': '2ba0cfd2e9msh0f5f712ffef8711p15c79cjsn0191f433b0ed',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        setData(response.data);
    }).catch(function (error) {
        console.error(error);
    });


    // const options = {
    //     method: 'GET',
    //     url: 'https://exercisedb.p.rapidapi.com/exercises',
    //     headers: {
    //         'X-RapidAPI-Key': '1a1783898bmshbc6dbc88e708f88p1ca3afjsn8a41bd5e8ae2',
    //         'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     setData(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // }, []);

    return (
        <div>
            <section className='mt'>
                <div className="exercise container ">
                    <div className="exercise_headline">
                        <h2>We Can Give A Shape Of Your  <span> Body Here! </span> </h2>
                    </div>
                    <div className="exercise_wrapper ">
                        <div className="exercise_input">
                            <input type="text" placeholder='Search Exercise' onChange={(e) => setSearch(e.target.value)} />
                            <button className='btn'>Search</button>
                        </div>

                    </div>

                    <div className="exercise_container">
                        {data.filter((item) => keys.some((key) => item[key].toLowerCase().includes(search))).splice(0, 30).map((item) => {
                            return (
                                <Link to={`/exercise/${item.id}`}>
                                    <div className="exercise_box" key={item.id}>
                                        <img className='exercise-img' src={item.gifUrl} alt="" />
                                        <div className="exercise_info">
                                            <h4 className='exercise-bodypart'>{item.bodyPart}</h4>
                                            <h4 className='exercise-name'>{item.equipment}</h4>
                                            <h4 className='exercise-target'>{item.target}</h4>
                                        </div>

                                    </div>
                                </Link>
                            )
                        })}
                    </div>


                </div>
            </section>
        </div>
    )
}

export default Exercise
