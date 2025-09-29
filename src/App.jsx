// "three": "^0.179.0",
//     "postprocessing": "^6.37.7"

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Login from './pages/Login';
import Register from './pages/Register';
import RoadmapPage from './pages/RoadmapPage';
import RoadmapFlow from "./components/RoadmapFlow";
import MicroLearning from './pages/MicroLearning';
import CareerSwap from './pages/CareerSwap';
import SwapAnalysis from "./components/SwapAnalysis"
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/Dashboard';
import CommunityPage from './pages/CommunityPage';
import JobRecommendationPage from './pages/JobRecm';
import PeerConnection from './pages/PeerConnection';



const SettingsPage = () => <h1 className="text-3xl font-bold">Settings</h1>;


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 2. USE the imported component in your Route */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/ladingpage' element={<LandingPage/>}/>
        <Route 
          path="/roadmap" 
          element={
            <Navbar>
              <RoadmapPage />
            </Navbar>
          } 
        />
        <Route 
          path="/flow" 
          element={
            <Navbar>
              <RoadmapFlow />
            </Navbar>
          } 
        />

        
        <Route 
          path="/microlearning" 
          element={
            <Navbar>
              <MicroLearning />
            </Navbar>
          } 
        />
        <Route
          path="/careerswap"
          element={
            <Navbar>
              <CareerSwap />
            </Navbar>
          }
        />
        <Route
          path="/analysis"
          element={
            <Navbar>
              <SwapAnalysis />
            </Navbar>
          }
        />
        <Route path="/community" element={<Navbar><CommunityPage /></Navbar>} />
        <Route path="/jobRecommendation" element={<Navbar><JobRecommendationPage /></Navbar>} />
        <Route path="/peer-connection" element={<Navbar><PeerConnection /></Navbar>} />
        
        
        <Route path="/dashboard" element={<Navbar><DashboardPage /></Navbar>} />
        <Route path="/settings" element={<Navbar><SettingsPage /></Navbar>} />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;