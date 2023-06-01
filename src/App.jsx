import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Table } from '@mui/material';

import Home from './Pages/Home';
import Kafedra from './Pages/Kafedra';



function App() {
  return (
    <div className="App ">

      <Routes>
        <Route path='/' element={<Home />}>
          <Route />
          <Route path='/about' element={<Table />} />
          <Route path='/kafedratarkibi' element={<Kafedra />} />
        </Route>
      </Routes>



      <div style={{ height: '100vh', background: '#f0f0f0' }}>
        {/* Add your page content here */}

      </div>
    </div>
  );
}

export default App;
