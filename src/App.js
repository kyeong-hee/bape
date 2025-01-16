import React,{useState, useEffect} from 'react'
import {  Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Header from './component/Header';
import PrivateRoute from './route/PrivateRoute';
import './style.css'

function App() {

  const [loginok, setLoginOk] = useState(false);
  console.log(loginok);

  useEffect(()=>{
    console.log(loginok)
  },[loginok])

  return (
    <div>
      <Header loginok={loginok}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login setLoginOK={setLoginOk}/>}/>
        <Route path='/products/:id' element={<PrivateRoute loginok={loginok}/>}/>
      </Routes>
    </div>
  )
}

export default App