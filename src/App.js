import React from 'react'
import { Route , BrowserRouter as Router,  Routes } from 'react-router-dom'
import Home from "../src/Component/Home"
import Booking from './Component/Booking'
import Login from './Component/Login'
import TicketBooking from "./Component/TicketBooking"
const App = () => (
  <div>
    
    <Router>

   <Routes>
    
   
   
   <Route path="/" element={<Home />}></Route>
   <Route path="/Login" element={<Login />}> </Route>
   <Route path="/TicketBooking" element={<TicketBooking />}> </Route>
   <Route path="/booking" element={<Booking />}> </Route>
    </Routes>
    </Router>
</div>
)

export default App