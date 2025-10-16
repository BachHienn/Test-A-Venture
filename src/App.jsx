import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import RenewablePage from './pages/RenewablePage'
import AirPage from './pages/AirPage'
import WastePage from './pages/WastePage'
import TreePage from './pages/TreePage'
import CarbonPage from './pages/CarbonPage'

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/air' element={<AirPage />}/>
        <Route path='/waste' element={<WastePage />}/>
        <Route path='/renew' element={<RenewablePage />}/>
        <Route path='/tree' element={<TreePage />}/>
        <Route path='/carbon' element={<CarbonPage />}/>

        {/* * means when unfound or bad address will go to ErrorPage */}
        <Route path='*' element={<ErrorPage />}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
