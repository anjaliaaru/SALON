import React from 'react';
import './App.css';
import './Components/Makeup';
import Navbar from './Components/Navbar';
import Makeup from './Components/Makeup';
import Pearl from './Components/Pearl';
import Images from './Components/Images';
import Booking from './Components/Booking';
import MaterialUI from './Components/MaterialUI';
import './App.css';
import { BrowserRouter as
  Router, Route, Routes, } from 'react-router-dom';
function App() {
  return (
   <div>
    
    
    <Router>
    

    <Navbar />
          <div className="container"> 
            <Routes>
              <Route exact path="/Makeup" element={<Makeup/>} />
              
              <Route exact path="/Pearl" element={<Pearl/>} />
              <Route exact path="/Images" element={<Images/>}/>
              <Route exact path="/Booking" element={<Booking/>}/>
              <Route exact path="/MaterialUI" element={<MaterialUI/>}/>
            </Routes>
          </div>
        </Router>
   </div>
  )
  }
export default App;
