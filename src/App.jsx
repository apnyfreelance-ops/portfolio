import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './layout/SiteLayout'
import Demos from './pages/Demos'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="demo" element={<Demos />} />
          <Route path="demos" element={<Navigate replace to="/demo" />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
