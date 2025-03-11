import React from 'react'
import './home.css'
import data from './data.js'
import {useNavigate } from 'react-router-dom';

const Home = (props) => {
    const navigate = useNavigate();
  return (
    <div className='home-page'>
        <header>
            <h3>Hello</h3>
            <div className='coin-cnt'>
                <p>{props.score}</p>
                <div className='img-cnt' >
                    <img src='img/f5.png' />
                </div>
            </div>
        </header>
        <h1>What would you like to play today? </h1>
        <div className='test-list'>
            {data.topic.map((item)=>{
                return(
                    <div className='card' key={item.id} onClick={() => navigate(`/test/${item.name}`)} >
                        <div className='img-card-cnt'>
                            <img src={item.img}/>
                        </div>
                        
                        <div className='text' >
                            <h3>{item.title}</h3>
                            <small>{item.qt}</small>
                        </div>

                    </div>

                )
            })}
            

        </div>
        
    </div>
  )
}

export default Home