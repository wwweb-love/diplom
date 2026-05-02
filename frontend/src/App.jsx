import './App.css'
import { Basket, Products, Product, Login, Registration, Admin, NotFound, ErrorPage } from './pages'
import { Routes, Route } from "react-router-dom"
import { Header } from './components'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { actionUser } from './actions'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || null
    console.log("App.jsx", user)
    dispatch(actionUser(user))
  }, [])

  return (
    <>
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
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
