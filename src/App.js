// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <h1>Front End</h1> */}
      <Header />
    </div>
  );
}

export default App;
