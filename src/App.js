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
        <Route path='/To-do-List-React' component={Home} exact/>
        <Route path='/about' component={About} exact/>
        <Route component={Error}/>
        </Switch>
    </div>
  );
}

export default App;
