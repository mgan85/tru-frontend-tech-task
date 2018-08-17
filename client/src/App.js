import React, { Component } from 'react';
import './App.css';
import Measures from './Measures/Measures'
import IconBar from './IconBar/IconBar';
import accountSrc from "./Images/account.svg";
import calendarSrc from "./Images/calendar.svg";
import leaderboardSrc from "./Images/leaderboard.svg";
import logoSrc from "./Images/logo.svg";
import notificationsSrc from "./Images/notifications.svg";
import pulseSrc from "./Images/pulse.svg";

class App extends Component {
  render() {
      let iconsForFirstIconBar = [
          {
              id:"Logo",
              url: logoSrc,
              position: 'Left',
          },
          {
              id:"Account",
              url: accountSrc,
              position: 'Right',
          }
      ];

      let iconsForSecondIconBar = [
          {
              id:"Calendar",
              url: calendarSrc,
              position: 'Centre',
          }
      ];

      let iconsForThridIconBar = [
          {
              id:"Pulse",
              url: pulseSrc,
              label: "Pulse",
              position: 'Left',
              color: 'blue'
          },
          {
              id:"Leaderboard",
              url: leaderboardSrc,
              label: "Leaderboard",
              position: 'Centre',
          },
          {
              id:"Notifications",
              url: notificationsSrc,
              label: "Notifications",
              position: 'Right',
          }
      ];

    return (
      <div className="App">
          <IconBar
              cssClasses="Header"
              color="#2bb5fd"
              icons={iconsForFirstIconBar}
          />
          <IconBar
              cssClasses="Header"
              color="#2bb5fd"
              icons={iconsForSecondIconBar}
          />
        <Measures />
          <IconBar
              cssClasses="Footer"
              color="#2bb5fd"
              icons={iconsForThridIconBar}
          />
      </div>
    );
  }
}

export default App;
