import { Component } from "react";
import DrawGrid from "../DrawGrid";
import "./index.css"

class TicketBooking extends Component {
  
    constructor() {
      super();
        this.state = {
        seat: [
          "1","2","3","4","5","6","7","8","9","10","11","12","13","14", "15", "16","17","18","19","20",
          "21","22","23","24","25","26","27","28","29","30","31","32","33","34", "35", "36","37","38","39","40",
          "41","42","43","44"
        ],
        seatAvailable: [
            "1","2","3","4","5","6","7","8","9","10","11","12","13","14", "15", "16","17","18","19","20"
        ],
        seatReserved: []
      }
    }
    
    onClickData(seat) {
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res !== seat)
        })
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
        })
      }
    }
    
    render() {
      return (
        <div className="seat-reservation">
          <h1  className="seat">Seat Reservation System</h1>
          
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            onClickData = { this.onClickData.bind(this) }
            />

            
        </div>
      )
    }
  }
  

  export default TicketBooking