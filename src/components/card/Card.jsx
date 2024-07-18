import React from "react";
import "./card.css"; 
import arrow from "../../assets/Arrow.png"


const Card = ({ title, paragraph,image }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{paragraph}</p>
      </div>
      <div className="row my-3">
      <div class="col go-corner">
        <div class="go-arrow"><img src={image} width={40} alt="" /></div>
      </div>
      <div class="col">
       <button className="button" ><img src={arrow} alt="" /></button>
      </div>
      
      </div>
    </div>
  );
};

export default Card;
