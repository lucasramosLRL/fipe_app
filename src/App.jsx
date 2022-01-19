import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import Models from './pages/Modelos';
import Years from './pages/Years';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/models/:id" element={<Models />}/>
        <Route path="/years/:id" element={<Years />}/>
      </Routes>
    </>
  )
}

export default App;