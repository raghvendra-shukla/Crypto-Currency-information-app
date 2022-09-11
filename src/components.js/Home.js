import React from 'react'
import { useState,useEffect } from 'react'
import Crypto from './Crypto';

function Home() {
  const [cryptodata, setData] = useState([]);
  const crypto_info=async()=>{
    let url=`https://crypto-info-api.herokuapp.com/api`;
    let data=await fetch(url);
    let parsedData=await data.json();
    setData(parsedData);
  }
  useEffect(() => {
    crypto_info();
  })
  
  return (
    <>
    <div className="row my-2">
      {cryptodata.map((element)=>{
        return(
          <div className="col text-center my-2" key={element.url}>
            <Crypto title={element.name} description={element.description} url={element.url} explore={element.explorer}/>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Home