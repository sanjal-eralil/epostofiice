import React, { useState } from 'react'
import './Service_Form.css'
import firestore from '../../firebase/config'
import { doc, setDoc } from "firebase/firestore"; 

function Service_Form() {
	const [name,setName]=useState('');
	const [service,setService]=useState('');
	const [id,setId]=useState('');
	const [address,setAddress]=useState('');
	const [date,setDate]=useState('');
  return (
    <div>
      <div className="container">
 	
 	<div className="main">
 
 		<h1>Add Service</h1>
 	
 		<form>
 			<span>
 				<i className="fa fa-user"></i>
 				<input type="text" placeholder="Service" name=""
					value={service}
              onChange={(e)=>setService(e.target.value)} required
				/>
 			</span><br/>
 			<span>
 				<i className="fa fa-lock"></i>
 				<input type="text" placeholder="Name" name=""
					value={name}
              onChange={(e)=>setName(e.target.value)} required
				/>
 			</span><br/>
			 <span>
 				<i className="fa fa-user"></i>
 				<input type="text" placeholder="id" name=""
					value={id}
              onChange={(e)=>setId(e.target.value)} required
				/>
 			</span><br/>
			 <span>
 				<i className="fa fa-user"></i>
 				<input type="text" placeholder="address" name=""
					value={address}
              onChange={(e)=>setAddress(e.target.value)} required
				/>
 			</span><br/>
			 <span>
 				<i className="fa fa-user"></i>
 				<input type="date" placeholder="date" name=""
					value={date}
              onChange={(e)=>setDate(e.target.value)} required
				/>
 			</span><br/>
			    
			 <button onClick={async()=>{
				try{
                            await setDoc(doc(firestore, "services", name), {
                              Name: name,
                              address : address,
                             service: service,
                             id:id,
							 date:date
                              });

				}catch (error) {
      // Handle the error here
      console.error("Error while submitting data:", error);
      // You can display an error message to the user or perform other error-handling tasks.
    }

                        }

                        }
                        
                        
                        
                         className="btn">Submit</button>


 		</form>
 	</div>
 
    </div>
    </div>
    )
}

export default Service_Form
