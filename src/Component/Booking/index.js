import {Component} from "react"
import "./index.css"

class Booking extends Component {

   render() {
   return(
    <div className="Booking">
        <h1 className="h1">Booking successfully</h1>
        <div className="booking-image">

     
        <img src="https://img.freepik.com/free-vector/vector-two-designed-cinema-tickets-close-up-top-view-isolated-white-background_1284-47320.jpg?w=740&t=st=1698416214~exp=1698416814~hmac=b441e347bc4a6192bc6f9791de8f0d42858476c43d7179ff94daaac5c836deb4"
        alt = "ticket" className="image"/>
        <img src="https://img.freepik.com/free-vector/confirmed-concept-illustration_114360-545.jpg?w=740&t=st=1698422506~exp=1698423106~hmac=dbb8e94f6ae60280f5350ebdbba3f253be62d39d07ed91cadf5b5d446f3a34d4"
        alt="ticket" className="image"/>
           </div>
    </div>
   )
   }
}

export default Booking