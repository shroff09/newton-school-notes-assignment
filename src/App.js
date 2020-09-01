import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
 import Head from './components/Head';

import Content from './components/TreeView';
import Array from './components/examples/Array';
import Map from './components/examples/Map';
import Sample1 from './components/examples/Sample1';
import Sample2 from './components/examples/Sample2';
import Sample3 from './components/examples/Sample3';

function App() {
  return (
    <Router>
      <div className="App">
       <Head first="Newton" second="School"/><br/>
       <Content/>
       <Switch>
         <Route exact path="/array" component={Array}/>
         <Route exact path="/map" component={Map}/>
         <Route exact path="/sample1" component={Sample1}/>
         <Route exact path="/sample2" component={Sample2}/>
         <Route exact path="/sample3" component={Sample3}/>
       </Switch>
     
    </div>
    </Router>
    
  );
}

export default App;
