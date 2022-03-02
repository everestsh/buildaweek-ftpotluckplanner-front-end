// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">

      <Header />
      {/* <hr/> */}
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      {/* <hr/> */}
      <Footer/>
      <h1>Front End</h1>
      <Button color="danger">Danger!</Button>
    </div>
  );
}

export default App;
