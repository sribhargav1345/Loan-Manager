import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Admin from "./Screens/Admin/Admin";
import User from "./Screens/User/User";
import Verifier from "./Screens/Verifier/Verifier";
import Login from "./Screens/Login/Login";
import Signup from "./Screens/Signup/Signup";

function Routing() {
  return (
    <Router>
        <Routes>
            <Route exact path='/admin' element={<Admin />}/>
            <Route exact path='/user' element={<User />}/>
            <Route exact path='/' element={<Verifier />}/>
            <Route exact path='/login' element={<Login />}/>
            <Route exact path='/signup' element={<Signup />}/>
        </Routes>
    </Router>
  );
}

export default Routing;