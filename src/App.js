import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Structure from './pages/structure';
import './assets/scss/app.scss';
import StoreProvider from './contexts/storeContext';

function App() {
  return (
    <BrowserRouter>
      <StoreProvider>
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
      </StoreProvider>    
    </BrowserRouter>
       
  );
}

export default App;
