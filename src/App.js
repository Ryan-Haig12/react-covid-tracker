import React from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import MapWrapper from './Map/MapWrapper'
import StatsLanding from './Stats/StatsLanding'

const App = () => {
  return (
    <div className="App">
      <div className="split stats-container">
        <StatsLanding />
      </div>
      <div className="split map-container">
        <MapWrapper />
      </div>
    </div>
  )
}

export default App
