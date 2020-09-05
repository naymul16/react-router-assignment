import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';
import Nofound from './Components/Nofound/Nofound';



function App() {
  return (
   
    <div>
          <Router>
           <Switch>
              <Route path="/home">
                    <Home></Home>
              </Route>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/post/:id">
                  <PostDetail></PostDetail>
              </Route>
              <Route path="*">
                  <Nofound></Nofound>
              </Route>
           </Switch>
         </Router>
    </div>
    
  );
}

export default App;
