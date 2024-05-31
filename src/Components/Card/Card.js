import React from 'react'
import './Card.css'

function Card({props}) {
  return (

       <div className="container" style={{marginBottom:25}}>

         <div className="card">
           <div className="lines"></div>
           <div className="imgBx">
              <img src="design.png" alt="img"></img>
           </div>
           <div className="content">
              <div className="details">
                  <h2>Name: {props.Name}</h2>

                  <div className='data'>
                   <h4>PostOffice: {props.PostOffice}</h4>
                   <h4>Colony: {props.Colony}</h4>
                   <h4>HouseNo: {props.HouseNo}</h4>

                  <a href="'#">Read More</a>
                  </div>

              </div>
           </div>

      </div>



   </div>
   

  )
}

export default Card
