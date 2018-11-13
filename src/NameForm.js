import React, { Component } from "react";

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
    
        this.handleChange = this.handleChange.bind(this);
    }
  

  handleChange(event) {
    
    this.setState({name: event.target.value});
    
    
  }
  render() {
    if(this.state.name.includes("*")){
        return(
            <form>
            <h1>{"Dont use stars, asshole"}</h1>
            <input id="name" type="text" value={this.state.name.substring(0, this.state.name.length-1)} onChange={this.handleChange}/>
        </form>
        );
    }else{ 
        return (
        <form>
            <h1>{this.state.name}</h1>
            <input id="name" type="text" value={this.state.name} onChange={this.handleChange}/>
        </form>
        );
        }
  }
}

export default NameForm;