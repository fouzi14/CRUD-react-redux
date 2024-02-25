
import { useSelector } from 'react-redux';
import './App.css';
import Home from './Home'; 
import {BrowserRouter,Routes ,Route} from "react-router-dom"
import Create from './Create';
import Edit from './Edit';

function App() {
      const data =useSelector(state=>state.users)
      console.log(data)
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/Edit/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
