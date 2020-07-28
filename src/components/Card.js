import React from 'react';

import '../styles/Card.scss';
import Tasks from './Tasks';

function Card() {
  return (
    <div className="Card card mr-2 bg-dark">
      <div className="card-header">
        <input className="form-control text-capitalize input" type="search" placeholder="To Do" aria-label="Title" />
      </div>
      <div className="card-body">
        <Tasks />
      </div>
      <button type="button" className="btn bg-dark text-white-50 Button">
        <span className="fa fa-plus"></span> Add Card
      </button>
    </div>
  );
}

export default Card;
