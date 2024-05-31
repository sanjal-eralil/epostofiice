import React ,{useState}from 'react'
import './Register.css'
import firestore from '../../firebase/config'
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate=useNavigate();
    const [name,setname]=useState('');
    const [colony,setcolony]=useState('');
    const [house,sethouse]=useState('');
    const [post,setpost]=useState('');

  return (
    <div>
          <section className="section">
        <div className="wrapper1">
            <div className="logreg-box">
            


                <div className="form-box register">
                    <div className="logreg-title">
                        <h2>Register</h2>
                        <p>Enter the details to start an account</p>
                    </div>
                    <form action="#">
                        <div className="input-box">
                            <span className="icon"><i className='bx bxs-user' ></i> </span>
                            <input type="text" value={name}
              onChange={(e)=>setname(e.target.value)} required/>
                            <label>Full name</label>
                        </div>
                        <div className="input-box">
                            <span className="icon"><i className='bx bxs-lock-alt' ></i>  </span>
                            <input type="text" value={post}
              onChange={(e)=>setpost(e.target.value)} required/>
                            <label>PostOffice</label>
                        </div>

                        <div className="input-box">
                            <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
                            <input type="text" value={colony}
              onChange={(e)=>setcolony(e.target.value)} required/>
                            <label>Colony</label>
                        </div>

                        <div className="input-box">
                            <span className="icon"><i className='bx bxs-lock-alt' ></i></span>
                            <input type="text" value={house}
              onChange={(e)=>sethouse(e.target.value)}required/>
                            <label>House No</label>
                        </div>



                        <div className="remember-forgot">
                            <label><input type="checkbox"/>I agree the terms and conditions</label>

                        </div>
                        <button onClick={async()=>{
                            await setDoc(doc(firestore, "clients", name), {
                              Name: name,
                              HouseNo : house,
                             PostOffice: post,
                             Colony:colony
                              }).then(()=>{
    navigate('/serviceregister')
  }

  );

                        }

                        }
                        
                        
                        
                         className="btn1">Submit</button>




                    </form>
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}

export default Register











// Add a new document in collection "cities"
