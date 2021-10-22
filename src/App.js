import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Structure from './pages/structure';
import './assets/scss/app.scss';

function App() {
  return (
    <BrowserRouter>
     <div className="app">
       <Switch>       
            <Route path="/" exact>
                  <Dashboard/>
            </Route>
            <Route path="/structure" exact>
                  <Structure/>
            </Route>     
       </Switch>  
      </div>              
    </BrowserRouter>
       
  );
}

export default App;
