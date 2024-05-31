import React,{useState,useEffect} from 'react'
import './ServiceTable.css'

import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


import firestore from '../../firebase/config';
function ServiceTable() {
    const navigate=useNavigate();
    const[services,setServices]=useState([]);
  
   
    useEffect(()=>{
     
      const fetchDataFromFirestore = async () => {
        try {
          
          const querySnapshot = await getDocs(collection(firestore, 'services'));
  
          // Process each document in the QuerySnapshot and collect the data
          const fetchedData = querySnapshot.docs.map((doc) => doc.data());
         
          console.log(fetchedData)
          setServices(fetchedData)
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      // Call the function to fetch data when the component mounts
      fetchDataFromFirestore();
  
  
  
  
  
    },[])




  return (
    <div>
      <table className="content-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Date</th>
            <th>Address</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
       
        {services.map((service) => (

     <tr className='active-row' key={service.name}>
        <th>{service.name}</th>
        <th>{service.id}</th>
        <th>{service.date}</th>
        <th>{service.address}</th>
        <th>{service.service}</th>

     </tr>
    


))}

       
        
        </tbody>
      </table>
      <button className="servicebutton"
      onClick={() => navigate('/clientlist')}>View Clients</button>
    </div>
  )
}

export default ServiceTable
