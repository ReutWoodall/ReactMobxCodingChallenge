import React, { useContext } from 'react';
import './App.css';
import DisplayUserName from './components/displayUserName';
import EditUserName from './components/editUserName';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <DisplayUserName />
        <EditUserName />
      </header>
    </div>
  );
};

export default App;
