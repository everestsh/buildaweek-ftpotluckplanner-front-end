// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <h1>Front End</h1>
      <Button color="danger">Danger!</Button>
      <Header />
      <Footer/>
    </div>
  );
}

export default App;
