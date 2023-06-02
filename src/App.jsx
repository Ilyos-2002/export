import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Table } from '@mui/material';

import Home from './Pages/Home';
import Kafedra from './Pages/Kafedra';



function App() {
  return (
    <div className="App ">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Table />} />
        {/* <Route path='/kafedratarkibi' element={<Kafedra />} /> */}
        <Route path='/kafedr' element={<Kafedra />} />

      </Routes>
    </div>
  );
}

export default App;
