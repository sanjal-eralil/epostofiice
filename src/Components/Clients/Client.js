import React,{useEffect, useState} from 'react'
import './Client.css'

import { collection, getDocs } from 'firebase/firestore';
import Card from '../Card/Card';

import firestore from '../../firebase/config';


function Client() {
  const[clients,setClients]=useState([]);
  
   
  useEffect(()=>{
   
    const fetchDataFromFirestore = async () => {
      try {
        
        const querySnapshot = await getDocs(collection(firestore, 'clients'));

        // Process each document in the QuerySnapshot and collect the data
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());
       
        console.log(fetchedData)
        setClients(fetchedData)
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchDataFromFirestore();





  },[])


  return (
    <div className='posters'>
    {clients.map((client) => (




      <div key={client.Name}>


       <Card props={client}/>

        {/* Render the data here */}
        





      </div>
    ))}
  </div>
    

  )
}

export default Client








