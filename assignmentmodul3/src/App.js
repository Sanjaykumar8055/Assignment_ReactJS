import logo from './logo.svg';
import './App.css';
import Mycomponent from './Mycomponent';
import Mycomponent2 from './Mycomponent2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mycomponent2/>
        <img src={logo} className="App-logo" alt="logo" />
        <Mycomponent/>
      </header>
    </div>
  );
}

export default App;
