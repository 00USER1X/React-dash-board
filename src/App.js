import './App.css';
import Widget01 from './components/Widget01/Widget01';
import Widget02 from './components/Widget02/Widget02';
import Widget03 from './components/Widget03/Widget03';
import Widget04 from './components/Widget04/Widget04';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Widget01 />
        <Widget02 />
        <Widget03 />
        <Widget04 />
        {/* You can add more widgets here if you wish */}
      </header>
    </div>
  );
}

export default App;
