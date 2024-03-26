

import './styles/App.css'
import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import HomePage from './pages/homePage/homePage.jsx'
//import WeatherApp from './pages/weatherWeb/components/WeatherApp.jsx'
//import SlimeSaviorApp from "./pages/slimeSavior/SlimeSaviorApp.jsx"
const LazySlimeSaviorApp = React.lazy(() => import("./pages/slimeSavior/SlimeSaviorApp.jsx"))
const LazyWeatherApp = React.lazy(() => import("./pages/weatherWeb/components/WeatherApp.jsx"))






function App() {
  

  return (
    <div className='appContainer'>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<HomePage/>}/>
          <Route path="/homePage" element={<HomePage/>}/>
          <Route path="/clima" element={
            <React.Suspense fallback="" >
              <LazyWeatherApp/>
            </React.Suspense>  
          }/>          
          <Route path="/slimeSavior" element={
            <React.Suspense fallback="" >
              <LazySlimeSaviorApp/>
            </React.Suspense>
          }/>          
        </Routes>       
    </div>
  )
}

export default App
