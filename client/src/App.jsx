import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLink from './pages/HomeLink'
import AdminLink from './pages/AdminLink'
import Controlslink from './pages/ControlsLink'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<HomeLink />} />
          <Route path='/admin' element={<AdminLink />} />
          <Route path='/admin/controls' element={<Controlslink />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}


export default App
