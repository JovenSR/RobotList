import React, { Component } from 'react';
import axios from 'axios';



class Robot extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let result = '';
    let robotAtt = this.props.robot.attributes
    for(let property in robotAtt) {
       if (robotAtt.hasOwnProperty(property)) {
        result += `${property}: ${robotAtt[property]}:`
      }
    }
    return(
      <div>
        <h1>Robot: {this.props.robot.thingName}</h1>
        <h2>Version: {this.props.robot.version}</h2>
        <h3>Attributes: {result}</h3>
      </div>
    );
  }
}

export default Robot