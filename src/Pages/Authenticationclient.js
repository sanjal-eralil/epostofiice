import React,{Fragment} from 'react'
import Header from '../Components/Header/Header'
import Authentication from '../Components/Authentication/Authentication'
import {Route} from 'react-router-dom'
function Authenticationclient() {
  return (
   <Fragment>
     <Header/>
     <Authentication/>
   </Fragment>
  )
}

export default Authenticationclient
