import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateSeries from './components/CreateSeries';
import Series from './components/Series';
import UpdateSeries from './components/UpdateSeries';
import Detalhes from './components/Detalhes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Series />}></Route>
          <Route path="/create" element={<CreateSeries />}></Route>
          <Route path="/update" element={<UpdateSeries />}></Route>
          <Route path="/details" element={<Detalhes />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
