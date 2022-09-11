import React from "react";
// import { Link } from "react-router-dom";

function Crypto(props) {
    const {title,description,url,explore}=props;
    const imgurl=`https://source.unsplash.com/random/1366x768/?${title}`
  return (
    <div className="container">
      <div className="card" style={{width:"18rem"}}>
      <img src={imgurl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description}
        </p>
        <a className="btn btn-primary mx-2" href={url}>
          Know More
        </a>
        <a className="btn btn-primary mx-2" href={explore}>
          Explore
        </a>
      </div>
    </div>
    </div>
    
  );
}

export default Crypto;
