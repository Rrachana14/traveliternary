import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding'; 
import MainDashboard from './pages/MainDashboard';

function App() {

  return (
   <div className='w-full h-full'>
     <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/maindashboard" element={<MainDashboard />} />


      </Routes>
    </Router>
   </div>
  )
}

export default App
