import React from 'react';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Artist from './pages/artist';

const App = () => {
  return (
    <Router>
      <Switch> 
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/artist" component={Artist}></Route>
      </Switch>
    </Router>
  );
}

export default App;
