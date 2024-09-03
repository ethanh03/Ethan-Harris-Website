import headshot from './headshot.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot} className="App-logo" alt="logo" />
        <p> Ethan Harris</p>
      </header>
    </div>
  );
}

export default App;
