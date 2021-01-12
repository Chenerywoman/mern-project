import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
