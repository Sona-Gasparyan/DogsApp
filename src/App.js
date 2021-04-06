import React from 'react'
import Header from './Components/Header'
import "./App.css"
import BreedList from './Components/BreedList';
import Navigation from './Components/Navigation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div >
        <Navigation />
        <Switch>
          <Route path="/breeds" component={BreedList} />
          <Route path="/home">
            <Header />
          </Route>
          <Route path="/asd" render={() => <div>this is asd cmp</div>} />
          <Route path="/" component={Header} />
        </Switch>
      </div>
    </Router>
  );


}

export default App;
