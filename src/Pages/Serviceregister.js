import React,{Fragment} from 'react'
import Header from '../Components/Header/Header'
import {Route} from 'react-router-dom'
import Service_Form from '../Components/Service_Form/Service_Form'
function Serviceregister() {
  return (
    <div>
      <Fragment>
          <Header/>
          <Service_Form/>
       </Fragment>
    </div>
  )
}

export default Serviceregister
