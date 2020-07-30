import React, {useEffect, useState} from 'react';

import Header from '../components/Header';
import board from '../services/board.json';

import '../styles/App.scss';
import ListCard from '../components/ListCard';

function App() {
  const [dataBoard, setDataBoard] = useState([]);

  useEffect(() => {
    const ListTasks = board.board.list;
    setDataBoard(ListTasks);
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="Main">
        <ListCard data={dataBoard} />
      </main>
    </div>
  );
}

export default App;
