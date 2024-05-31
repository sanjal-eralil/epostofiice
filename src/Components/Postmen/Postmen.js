import React,{useState,useEffect} from 'react'

import { collection, getDocs } from 'firebase/firestore';
import Card from '../Card/Card';

import firestore from '../../firebase/config';

function Postmen() {

    const[postmen,setPostmen]=useState([]);
  
   
    useEffect(()=>{
     
      const fetchDataFromFirestore = async () => {
        try {
          
          const querySnapshot = await getDocs(collection(firestore, 'postmen'));
  
          // Process each document in the QuerySnapshot and collect the data
          const fetchedData = querySnapshot.docs.map((doc) => doc.data());
         
          console.log(fetchedData)
          setPostmen(fetchedData)
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  
      // Call the function to fetch data when the component mounts
      fetchDataFromFirestore();
  
  
  
  
  
    },[])

  return (
    
      <div className='posters'>
    {postmen.map((postman) => (




      <div key={postman.Name}>


       <Card props={postman}/>

        {/* Render the data here */}
        





      </div>
    ))}
  </div>
    
    
  )
}

export default Postmen
