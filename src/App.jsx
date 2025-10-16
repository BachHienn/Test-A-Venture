import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import RenewablePage from './pages/RenewablePage'

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/renew' element={<RenewablePage />}></Route>

        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
