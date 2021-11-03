//import logo from "./logo.svg";
//import './App.css';
import "./Clock.css";
import React, { Component } from "react";
let now = new Date();
class App extends Component {
  state = {
    hour: now.getHours(),
    minute: now.getMinutes(),
    seconds: now.getSeconds(),
  };

  getDate() {
    /*
    this.setState((state) => {
      now.setTime(new Date().getTime());
      //return { currentDate: state.currentDate };
    });
    */
    now.setTime(new Date().getTime());
    console.log(now.getMinutes());
    this.setState({
      hour: now.getHours(),
      minute: now.getMinutes(),
      seconds: now.getSeconds(),
    });
  }
  componentDidMount() {
    this.oneSecondCall = setInterval(() => this.getDate(), 1000);
    //setInterval(() => this.getDate(), 1000);
    console.log(now.getMinutes());
    /*
    let { setNow } = now;
    setInterval(setNow, 1000);
    console.log(now.getMinutes);
*/
  }

  componentWillUnmount() {
    clearInterval(this.oneSecondCall);
  }

  hourtoDegree(hour) {
    return (hour / 12) * 360 + 90;
  }
  minutetoDegree(minute) {
    return (minute / 60) * 360 + 90;
  }
  secondsToDegrees(seconds) {
    return (seconds / 60) * 360 + 90;
  }

  render() {
    let hours = this.state.hour;
    let minutes = this.state.minute;
    let seconds = this.state.seconds;
    console.log("minute:", minutes);
    const hourStyle = { transform: `rotate(${this.hourtoDegree(hours)}deg)` };
    const minuteStyle = {
      transform: `rotate(${this.minutetoDegree(minutes)}deg)`,
    };
    const secondStyle = {
      transform: `rotate(${this.secondsToDegrees(seconds)}deg)`,
    };
    return (
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand" style={hourStyle}></div>
          <div className="hand min-hand" style={minuteStyle}></div>
          <div className="hand second-hand" style={secondStyle}></div>
        </div>
      </div>
    );
  }
}

export default App;
