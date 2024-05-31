import React,{Fragment} from 'react'
import Header from '../Components/Header/Header'
import {Route} from 'react-router-dom'
import Client from '../Components/Clients/Client'
function Clientlist() {
  return (
    <div>
      <Fragment>
          <Header/>
          <Client/>
       </Fragment>
    </div>
  )
}

export default Clientlist
