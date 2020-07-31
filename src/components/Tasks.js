import React from 'react';

function Tasks(props) {
  const {title, id} = props.task;

  return (
    <li className="task-li list-group-item mb-2" id={id}>
      <h3 className="h6">{title}</h3>
    </li>
  );
}

export default Tasks;
