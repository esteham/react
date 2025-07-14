// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/navbar';
import Component from './pages/component';
import ParentProps from './pages/parentProps';
import SamePageProps from './pages/samePageProps';
import StateEvent from './pages/stateEvent';
import NameInput from './pages/stateNameInput';

import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50"> 
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/component" element={<Component />} />
            <Route path="/parentProps" element={<ParentProps />} />
            <Route path="/samePageProps" element={<SamePageProps />} />
            <Route path='/stateEvent' element={<StateEvent />} />
            <Route path='/stateNameInput' element={<NameInput/>}/>
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;