
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
          <Login/>
          </Route>
          <Route path="/home">
            <Header/>
          </Route>
        </Switch>
      </Router>
      
    
    </div>
  );
}

export default App;
