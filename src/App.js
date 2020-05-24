import React from 'react';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import ArtistList from './pages/artistList';
import Artist from './pages/artist';
import Album from './pages/album';
import { AppProvider } from './context/app';


const App = () => {
  return (
    <AppProvider>
      <Router>
        <Switch> 
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/artistlist" component={ArtistList}></Route>
          <Route exact path="/artist/:id" component={Artist}></Route>
          <Route exact path="/album/:id" component={Album}></Route>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
