import './App.css'
import { Basket, Products, Product, Login, Registration, Admin, NotFound, ErrorPage } from './pages'
import { Routes, Route } from "react-router-dom"
import { Header } from './components'

function App() {
  return (
    <>
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:category/:id' element={<Product />} />
        <Route path='/basket/:userId' element={<Basket />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/errors' element={<ErrorPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </>
  )
}

export default App
