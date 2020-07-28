import React from 'react';
import Card from './Card';

function ListCard() {
  return (
    <section className="d-flex p-3">
      <Card />
      <button type="button" className="btn btn-info align-self-start">
        <span className="fa fa-plus"></span>
      </button>
    </section>
  );
}

export default ListCard;
