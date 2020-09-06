import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotMatch from './Components/NotMatch/NotMatch';
import PostDetail from './Components/PostDetail/PostDetail';



function App() {


  return (

    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:postid">
          <PostDetail />
        </Route>

        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
