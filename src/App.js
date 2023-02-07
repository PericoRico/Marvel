import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { Button, Icon } from 'semantic-ui-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';
import Header from './components/Header/Header';
import useFetch from './hooks/useFetch';
import ListLastEvents from './components/ListLastEvents/ListLastEvents';


function App() {

  const exampleApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a088261843f3a00a05868b310ff3874a&hash=043fc0b1885b912c426367c8143ceb6a');
  console.log(exampleApi);

  return (
    <div>

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <ListLastEvents></ListLastEvents>
      </BrowserRouter>
    </div>
  )
}

export default App;
