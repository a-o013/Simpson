import React, {Component} from "react";
import {NavLink} from "react-router-dom"

class Navigation extends Component {
    constructor(props) {
      super(props);
      this.state = {
          color: props.red
        };
      }
      handleClick = () => {
        this.setState({ color: !this.state.color });
      };
    render() {
    if(this.state.color){
        return (
            
            <div className="nav">
                <NavLink onClick={this.handleClick} className="not-red" to="/">Home</NavLink>
                <NavLink className="red" to="/notre-histoire">History</NavLink>
            </div>
        )}
    else{
        return (
            <div className="nav">
                <NavLink className="red" to="/">Home</NavLink>
                <NavLink onClick={this.handleClick} className="not-red" to="/notre-histoire">History</NavLink>
            </div>
        )}
}
}

export default Navigation