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
    
      {data.topic.map((item,index) => {
        if (item.name === props.name) {
          return(
            <div key={index} className='qs' >
              <div className='img-cnt'>
                <img src={item.qts[0].img}/>
                {/* <img src={itm.image} alt={itm.name} /> Add a valid src */}
              </div>
              <h1>{item.qts[0].name}</h1>
              {item.qts[0].ch.map((itm)=>(
            
                    <div className='btn'>
                        <h3>{itm}</h3>
                    </div>
              ))
            }  
            </div>
          );
        }
      })}
    </div>
  );
};

export default Test;