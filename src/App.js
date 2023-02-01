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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
