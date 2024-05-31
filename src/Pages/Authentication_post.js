import React,{Fragment} from 'react'
import Header from '../Components/Header/Header'
import {Route} from 'react-router-dom'
import Authenticationpost from '../Components/Authenticationpost/Authenticationpost'

function Authentication_post() {
  return (
    <div>
      <Fragment>
     <Header/>
     <Authenticationpost/>
   </Fragment>
    </div>
  )
}

export default Authentication_post
