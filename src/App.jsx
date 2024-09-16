import { useState } from 'react'
import Homepage from './components/Homepage.jsx'
import Search from './components/Search.jsx'
import Imagepage from './components/Imagepage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Collectionpage from './components/Collectionpage.jsx';
import Collectionphotopage from './components/Collectionphotopage.jsx';



function App() {
  

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/dark" element={<Homepage mode='dark'/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/image" element={<Imagepage/>}></Route>
        <Route path="/collections" element={<Collectionpage/>}></Route>
        <Route path="/collections/collection" element={<Collectionphotopage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
