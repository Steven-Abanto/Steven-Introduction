import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Background from './components/Background/Background'

function App() {
  return (
    <div className="fuente-1" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Background />
      <div style={{ flex: 1 }}>
        {/* Rutas de la aplicacion */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
