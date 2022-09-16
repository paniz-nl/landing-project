import React, { Component } from 'react';
// version 5.2.0 of react router dom: 
// import { Route, Switch, Redirect } from 'react-router-dom';

//-------------------------------------------------------
// version 6 of react router dom: 
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Product from './Components/Product';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import DetailsPage from './Components/DetailsPage';
import AboutUs from './Components/AboutUs';
import Programmers from './Components/Programmers';

class App extends Component {
  

  render() {
    return (
      <div>
        <Navbar/>
        {/* ------------------------------------------------------- */}
        {/* version 5.2.0 of react router dom */}
        
        {/* <Switch>
          <Route path="/product" component={Product}/>
          <Route path="/notfound" component={NotFound}/>
          <Route exact path="/" component={Landing}/>
          <Redirect to="/notfound"/>
        </Switch> */}
        {/* ------------------------------------------------------- */}

        {/* version 5.2.0 of react router dom */}

        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id" element={<DetailsPage/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
          <Route path="/*" element={<Navigate to="/notfound"/>} />
          <Route path="/aboutus/*" element={<AboutUs/>}>
            <Route path="programmers" element={<Programmers/>}/>
            <Route path="drivers" element={<h1>Drivers</h1>}/>
          </Route>
        </Routes>

        <Footer/>
      </div>
    );
  }
}

export default App;
