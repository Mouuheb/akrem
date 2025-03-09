import React from 'react';
import './test.css';
import data from './data.js';

const Test = (props) => {
  console.log(props.name);

  return (
    <div className='test-page'>
      <header>
        <h3>Hello</h3>
        <div className='coin-cnt'>
          <p>620</p>
          <div className='img-cnt'>
            <img src='img/f5.png' alt="coin" />
          </div>
        </div>
      </header>
    
      {data.topic.map((item) => {
        if (item.name === props.name) {
          return item.qts.map((itm, index) => (
            <div key={index} className='qs' >
              <div className='img-cnt'>
                {/* <img src={itm.image} alt={itm.name} /> Add a valid src */}
              </div>
              <h1>{itm.name}</h1>
              <div className='btn'>
                <h3>GET STARTED</h3>
              </div>
            </div>
          ));
        }
        return null; // Return null for items that don't match the condition
      })}
    </div>
  );
};

export default Test;