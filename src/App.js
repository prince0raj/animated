import React from 'react';
import './App.css';
import Home from './app/Home';
import { Routes, Route} from 'react-router-dom';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/c2' element={<Card2/>}/>
      <Route path='/c3' element={<Card3/>}/>
      <Route path='/c4' element={<Card4/>}/>
    </Routes>      
    </>
  );
}

export default App;
