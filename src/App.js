
import './App.css';
import Client from './Components/Clients/Client';

import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import Authentication from './Components/Authentication/Authentication'
import Register from './Components/Register/Register';
import Service_Form from './Components/Service_Form/Service_Form';
import ServiceTable from './Components/ServiceTable/ServiceTable';
import Postmen from './Components/Postmen/Postmen';

import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Authenticationclient from './Pages/Authenticationclient';
import Authentication_post from './Pages/Authentication_post';
import Servicelist from './Pages/Servicelist';
import Clientlist from './Pages/Clientlist';
import Client_register from './Pages/Client_register';
import Serviceregister from './Pages/Serviceregister';


function App() {
  return (
    <div >
     <Router>
     <Routes>
      <Route exact path='/client' element={<Authenticationclient />}/>
      <Route exact path='/postman' element={<Authentication_post />}/>
      <Route exact path='/service' element={< Servicelist/>}/>
      <Route exact path='/clientlist' element={< Clientlist/>}/>
      <Route exact path='/clientregister' element={< Client_register/>}/>
      <Route exact path='/serviceregister' element={< Serviceregister/>}/>



      </Routes>
     </Router>
     

    </div>
  );
}

export default App;
