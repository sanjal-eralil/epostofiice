





import React, { useState } from 'react';
import Firebase from '../../firebase/config1';
import './Authenticationpost.css'
import { useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";








const Authenticationpost= () => {
    const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('in');
    console.log(user)
    
    // ...
  }).then(()=>{
    navigate('/service'
    )
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  };

  const handleSignup = async (e) => {
    const auth = getAuth();
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  }).then(()=>{
    navigate('./list')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(error );
    console.log(errorMessage);
    // ..
  });
  };

  return (
    <div>
      <section className="section">
<div className="wrapper">
    <div className="logreg-box">
        <div className="form-box login">
            <div className="logreg-title">
                <h2>Postman</h2>
                <p>Enter as Postman</p>
            </div>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><i class='bx bxs-envelope' ></i>  </span>
                    <input type="email"  placeholder="Email" value={email} onChange={handleEmailChange} required/>
                    <label>Email</label>
                </div>

                <div className="input-box">
                    <span className="icon"><i class='bx bxs-lock-alt' ></i></span>
                    <input type="password"   placeholder="Password" value={password} onChange={handlePasswordChange}
                    required/>
                    <label>Password</label>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" onClick={handleLogin} class="btn">Login</button>
                
                <button type="submit" onClick={handleSignup} class="btn">Signup</button>


                <div className="logreg-link">
                    <p>Are you a Client  <button onClick={() => navigate('/client')}>Click Here</button>
                    </p>
                </div>

            </form>
        </div>

       
    </div>
</div>
</section>
    </div>
  );
};

export default Authenticationpost;





