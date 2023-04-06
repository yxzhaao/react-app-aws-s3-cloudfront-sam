import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a React application hosted on AWS S3.
        </p>
        <p>
          Source codes are in <code>src/App.js</code>.
        </p>
      </header>
    </div>
  );
}

export default App;
