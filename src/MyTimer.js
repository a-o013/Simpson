import React, { Component } from 'react';

class MyTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
          };
    }
    componentDidMount(){
        let funCounter = setInterval(() => {
            this.setState(function(param){
                return{
                    counter: param.counter + 1
                }
            })
        }, 1000)
    }
    componentDidUpdate(){
        console.log("un update a eu lieu")
    }
    componentWillUnmount(){
        clearInterval(this.funCounter)
    }
  render() {
    
    return (
      <div>
          <h1>Vous étes ici depuis</h1>
          <p>{this.state.counter} secondes</p>
      </div>
    );
  }
}


export default MyTimer;