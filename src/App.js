import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Error from './components/Error';


function App(props){
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='https://cezaraus.github.io/To-do-List-React/' component={Home} exact/>
        <Route path='https://cezaraus.github.io/To-do-List-React/about' component={About} exact/>
        <Route component={Error}/>
        </Switch>
    </div>
  );
}

export default App;
