import { Component } from "react";

import ReservedList from "../ReservedList";
import "./index.css"
class DrawGrid extends Component {
    onClickSeat(seat) {
        this.props.onClickData(seat);
      }
      
    render() {
      return (
         <div className="container">
          <div className="screen">

          </div>
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row )}>{row} </td>) }
                      
                </tr>
            </tbody>
            
          </table>
          
          
          
         
          <ReservedList reserved = { this.props.reserved } />
         </div>
      )
    }
    
   
  }


  export default DrawGrid