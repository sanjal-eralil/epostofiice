import React,{Fragment} from 'react'
import Header from '../Components/Header/Header'
import {Route} from 'react-router-dom'
import Register from '../Components/Register/Register'
function Client_register() {
  return (
   <Fragment>
     <Header/>
     <Register/>
   </Fragment>
  )
}

export default Client_register
