import React from 'react'
import './res.css'

const Res = (props) => {
  return (
    <div className='res-page'>
        <h1>score :</h1>
        <h2>{props.score}</h2>

        <div className='btn' onClick={() => {nst()}}>
            <h3>Home</h3>
        </div>
    </div>
  )
}

export default Res