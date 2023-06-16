
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AddVideo from './Components/addVideo';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<AddVideo/>} path='/add-video'/>
      <Route element={<PageNotFound/>} path='*' />
    </Routes>
    
    
    
    </BrowserRouter>
    </div>
  );
}

export default App;
