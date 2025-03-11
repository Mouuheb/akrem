import React from 'react'
import './start.css'
import {useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();
  return (
    <div className='start-page' >
        <div className='kk'>
            
        </div>
        <div className='text-cnt'>
            <h1>Welcome</h1>
            <h1>to Akrem Quiz</h1>
            <div className='text'>
                <p>Play,Learn,and Explore with Exciting</p>
                <p>Quizzes!</p>
            </div>
            
            <div className='btn' onClick={() => navigate('/home')}>
                <h3>GET STARTED</h3>
            </div>
        </div>
    </div>
  )
}

export default Start