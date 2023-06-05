import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Table } from '@mui/material';

import Home from './Pages/Home';
import Kafedra from './Pages/Kafedra';



function App() {
  return (


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Table />} />
      {/* <Route path='/kafedratarkibi' element={<Kafedra />} /> */}
      <Route path='/kafedra' element={<Kafedra />} />

    </Routes>

  );
}

export default App;
