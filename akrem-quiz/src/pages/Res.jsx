import React from 'react'
import './res.css'
import {useNavigate } from 'react-router-dom';
const Res = (props) => {
    const navigate = useNavigate();
  return (
    <div className='res-page'>
        <h1>score :</h1>
        <h2>{props.score}</h2>

        <div className='btn' onClick={() => navigate('/home')}>
            <h3>Home</h3>
        </div>
    </div>
  )
}

export default Res