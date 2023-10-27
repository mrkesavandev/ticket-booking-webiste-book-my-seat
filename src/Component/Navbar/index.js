import { Component } from "react";
import {BsSearch} from "react-icons/bs"
import "./index.css"

class Navbar extends Component {
    state= {
        searchInput : ""
    }

    onChangeInputSearch = event => {
        this.setState({searchInput : event.target.value})
    }

   
    render(){
        const{searchInput} = this.state
       

        return(
            <div> 
            <div className="nav-container">
                    <h1 className="nav-heading">Book my Seat</h1> 
                    <div className="form-container">
                      <BsSearch className="icon"/> 
                     <input type="search" name="search" placeholder="Search.." value={searchInput} onClick={this.onChangeInputSearch} className="input-box" autocomplete = "off" />
                     </div>
                    
                    <div className="booking-details">
                        <select className="location">
                            <option value="Salem"> Salem </option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Chennai">Chennai</option>
                        </select>
                        <div className="list-of-booking">
                            <p className="nav-list">Booking</p> 
                            <p className="nav-list">Sign out</p>
                            
                        </div>
                    </div>
                    </div>
                    
            </div>
        )
    }

}

export default Navbar