import React from 'react'
import Header from './Components/Header'
import "./App.css"
import BreedList from './Components/BreedList';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Components/Main';
import Asd from './Components/Asd';
import Breed from './Components/Breed';



function App() {
  return (
    <Router>
      <div >
        <Navigation />
        <Header />
        <Switch>
          <Route path="/breeds" component={BreedList} exact />
          <Route path="/breeds/:breed/:subBreed" component={Breed} />
          <Route path="/breeds/:breed" component={Breed} />
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/asd" render={() => <Asd qwe={10} />} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );


}

export default App;
