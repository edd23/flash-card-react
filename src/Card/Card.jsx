import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="title">{props.title}</div>
      </div>
      <div className="back">
        <div className="text">{props.text}</div>
      </div>
    </div>
  </div>
)

export default Card