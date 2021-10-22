import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Structure from './pages/structure';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact>
                  <Dashboard/>
            </Route>
            <Route path="/structure" exact>
                  <Structure/>
            </Route>
      </Switch>        
    </BrowserRouter>
       
  );
}

export default App;
