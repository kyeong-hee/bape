import React from 'react'
import ProductDetail from '../page/ProductDetail';
import { Navigate } from 'react-router-dom';


function PrivateRoute({loginok}) {
  return loginok == true ? <ProductDetail/> : <Navigate to={"/login"} />
}

export default PrivateRoute