import React from 'react';
import './App.css';
import Home from './app/Home';
import { Routes, Route} from 'react-router-dom';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import Card7 from './Card7';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/c2' element={<Card2/>}/>
      <Route path='/c3' element={<Card3/>}/>
      <Route path='/c4' element={<Card4/>}/>
      <Route path='/c5' element={<Card5/>}/>
      <Route path='/c6' element={<Card6/>}/>
      <Route path='/c7' element={<Card7/>}/>
    </Routes>      
    </>
  );
}

export default App;
