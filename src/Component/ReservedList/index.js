import { Component } from "react"
import "./index.css"
import { Link } from "react-router-dom"

class ReservedList extends Component {
    state = {
        bookTicket : false
    }
    button = () => {
       
       if(this.props.reserved.length === 0) {
          this.setState({bookTicket : true})
          
       }
       else{
        this.setState({bookTicket : false})

       }

    }



    render() {
       
      return(
        <div className="right">
          <h4>Reserved Seat No : ({this.props.reserved.length})</h4>
          <ul className="ul-list">
            { this.props.reserved.map(res => <li className="list" key={res} >{res}</li>) }
          </ul>
          <div className="bottom-view">

      
           <h4> Total : {this.props.reserved.length *230}</h4>
             
        <div>
            {this.props.reserved.length> 0 &&
                   <Link to ="/booking">
                   <button onClick={this.button} className="button">
                          Book
                   </button>
                   </Link>
            }
           

        </div>
        </div>
        </div>
      )

      
    }
  }


  export default ReservedList