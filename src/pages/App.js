import React from 'react';

import Header from '../components/Header';

import '../styles/App.scss';
import ListCard from '../components/ListCard';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <ListCard />
      </main>
    </div>
  );
}

export default App;
