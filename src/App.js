import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Button, Icon } from 'semantic-ui-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';


function App() {
  return ( //TODO ver video de version 6
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/inicio" exact component={() => <Home />} />
          <Route path="/series" exact component={() => <Series />} />
          <Route path="/comics" exact component={() => <Comics />} />
          <Route component={() => <Error404 />} />
        </Switch>

      </Router>
    </div>
  )
}

export default App;
