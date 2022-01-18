import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Modelos from './pages/Modelos';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/modelos/:id" element={<Modelos />}/>
    </Routes>
  )
}

export default App;