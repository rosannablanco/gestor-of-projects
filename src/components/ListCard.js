import React from 'react';
import Card from './Card';

function ListCard(props) {
  const TaskElement = props.data.map((task, index) => {
    return <Card dataTask={task} key={index} />;
  });
  console.log();
  return (
    <section className="d-flex p-3">
      {TaskElement}
      <button type="button" className="btn btn-info align-self-start">
        <span className="fa fa-plus"></span>
      </button>
    </section>
  );
}

export default ListCard;
