import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Robo from '../robot.png';
import Robot from './robot';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [ ],
      mustDisplaySingleRobot: false
    }

    this.allRobots = [];
  }


  componentDidMount(){
    axios.get('https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots')
      .then(res => {
        this.setState({
          robots: res.data,
          mustDisplaySingleRobot: false
        })
        this.allRobots = res.data
        console.log(this.allRobots)
      })
  }

  alertOnClick(robotName) {
    let name = robotName;
    axios.get('https://6i9nu7ctv0.execute-api.us-west-2.amazonaws.com/test/robots/name/' + name)
      .then(res => {
        this.robot = res.data;
        var newState = this.state;
        newState.mustDisplaySingleRobot = true;
        this.setState(newState);
      })


  }

  filterBy(status) {
    let filteredRobots = this.allRobots.map(robot => {
      if(robot.status === status) {
        return robot
      } else {
        return null
      }
    }).filter(robot => robot)
    console.log(filteredRobots)
    this.setState({
      robots: filteredRobots
    })
  }

  displayAllRobots() {
    this.setState({
      robots: this.allRobots
    })
  }

  returnAllRobots() {
    this.setState({
      mustDisplaySingleRobot: false
    })
  }

  render() {
    if(this.state.mustDisplaySingleRobot) {
      return(
        <div>
          <button onClick={()=>{this.returnAllRobots(); }}>Show Robot List</button>
          <Robot robot={this.robot}/>
        </div>
      );
    } else {
      let { robots } = this.state;
      let robotList = robots.length ? (
        robots.map(robot => {
          return (
            <div className="robot card" key={robot.thingId}>
              <img src={Robo} alt="A%K Robot Logo"/>
              <div className="card-content" onClick={()=>{ this.alertOnClick(robot.thingName); }}>
              <span className="card-title red-text">{robot.thingName}</span>
              <p>{robot.status}</p>
            </div>
            </div>
          )
        })
        ) : (
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
      )

      return (
        <div className="container home">
          <h4 className="center">Robot List</h4>
          <button onClick={()=> {this.displayAllRobots()}}>All</button>
          <button onClick={()=> {this.filterBy('online')}}>Online</button>
          <button onClick={()=> {this.filterBy('offline')}}>Offline</button>
          {robotList}
        </div>
      )
    }
  }
}



export default Home