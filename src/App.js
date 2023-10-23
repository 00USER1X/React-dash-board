import React from 'react';
import './App.css';
import DigitalClock from './components/DigitalClock';
import Calculator from './components/Calculator';
import CountdownTimer from './components/CountdownTimer';
import PomodoroTimer from './components/PomodoroTimer';
import ToDoList from './components/ToDoList';


function App() {
  return (
    <div className="app">
      <DigitalClock />
      <Calculator/>
      <CountdownTimer/>
      <PomodoroTimer/>
      <ToDoList/>
    </div>
  );
}

export default App;

