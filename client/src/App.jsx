import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutUsLink from './pages/AboutUsLink'
import MenuLink from './pages/MenuLink'
import LocationLink from './pages/LocationLink'
import HomeLink from './pages/HomeLink'
import Header from '../components/nav-bar/Header'
import Menu from '../components/menu/Menu'
import Logo from '../components/hero/Logo'
import Hero from '../components/hero/Hero'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Menu />
      {/* <BrowserRouter>
        <Routes >
          <Route path='/' element={<HomeLink />} />
          <Route path='/aboutus' element={<AboutUsLink />} />
          <Route path='/location' element={<LocationLink />} />
          <Route path='/menu' element={<MenuLink />} />
        </Routes>
      </BrowserRouter> */}

    </>
  )
}


export default App
