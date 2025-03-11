import React from 'react';
import './test.css';
import data from './data.js';
import { useState } from 'react';

const Test = (props) => {
  console.log(props.name);
  const Qcnt = 3;
  const [num,setNum] = useState(0);
  const [score,setScore] = useState(0);
  const [next,setNext]= useState(true);
  const [ans,setAns]= useState('');
  const [fin,setFin]= useState(true);
  const nst = ()=>{
    if (num<Qcnt-1){
      setNum(num+1)
      setNext(true)
    }
    else{
      setFin(true)
    }
    
  }
  const Ans = (x)=>{
    if (num<Qcnt){
      setAns(x)
      setNext(false)
    }
    
  }

  return (
    <div className='test-page'>
      <header>
        <h3>X</h3>
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
                <img src={item.qts[num].img}/>
              </div>
              <p>Question {num+1} of 3</p>
              
              <h1>{item.qts[num].q}</h1>

              {next ? (
                item.qts[num].ch.map((itm, index) => (
                  <div key={index} className='btn' onClick={() => {Ans(item.qts[num].ch[index])}}>
                    <h3>{itm}</h3>
                  </div>
                ))
              ) : (
                <>
                  {
                    ans ===item.qts[num].a ?
                    (<div className='btn green' >
                      <h3>{ans}</h3>
                    </div>):(<div className='btn red' >
                    <h3>{ans}</h3>
                  </div>)
                  }
                  <div className='btn' onClick={() => {nst()}}>
                    <h3>Next</h3>
                  </div>
                  <div className='res-cnt'>
                    {ans ===item.qts[num].a &&(
                      <><p>That's the right Answer +10 coins</p>
                    <div className='img-cnt-res'>
                      <img src='img/f5.png'/>
                    </div></>
                  )}
                  </div>
                  
                </>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Test;