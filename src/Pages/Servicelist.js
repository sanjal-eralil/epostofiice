import React,{Fragment} from 'react'
import Header from '../Components/Header/Header'
import {Route} from 'react-router-dom'
import ServiceTable from '../Components/ServiceTable/ServiceTable'

function Servicelist() {
  return (
    <div>
      <Fragment>
          <Header/>
          <ServiceTable/>
       </Fragment>
    </div>
  )
}

export default Servicelist
