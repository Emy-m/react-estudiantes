import logo from './logo.svg';
import './App.css';
import Estudiantes from './Estudiante/Estudiantes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Estudiantes />
      </header>
    </div>
  );
}

export default App;
