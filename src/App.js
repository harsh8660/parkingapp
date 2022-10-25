import React from 'react';
import RegForm from './components/RegForm';
import AllVehicles from './components/ShowAll';
import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import ShowVehicle from './components/ShowVehicles';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<RegForm/>}/>
      <Route path='/ParkedVehicles' element={<ShowVehicle/>}/>
      <Route path='/ShowAll' element={<AllVehicles/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
