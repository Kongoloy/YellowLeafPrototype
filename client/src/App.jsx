import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from '../components/Menu'
import './App.css'
import AboutUsLink from './pages/AboutUsLink'
import MenuLink from './pages/MenuLink'
import LocationLink from './pages/LocationLink'
import HomeLink from './pages/HomeLink'
import Header from '../nav-bar/Header'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<HomeLink />} />
          <Route path='/aboutus' element={<AboutUsLink />} />
          <Route path='/location' element={<LocationLink />} />
          <Route path='/menu' element={<MenuLink />} />
        </Routes>
      </BrowserRouter>
      <Header />
    </>
  )
}


export default App
