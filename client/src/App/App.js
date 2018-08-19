import React, { Component } from 'react';
import './App.css';
import Measures from './Measures/Measures';
import IconBar from './IconBar/IconBar';
import accountSrc from './../Images/account.svg';
import calendarSrc from './../Images/calendar.svg';
import leaderboardSrc from './../Images/leaderboard.svg';
import logoSrc from './../Images/logo.svg';
import notificationsSrc from './../Images/notifications.svg';
import pulseSrc from './../Images/pulse.svg';

//Stateful component represent app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: 'measures?shoppingChannel=online',
    };
  }

  //Function toggle measures datasource
  changeData() {
    if (this.state.dataSource === 'measures?shoppingChannel=online') {
      this.setState({ dataSource: 'measures?shoppingChannel=instore' });
    } else {
      this.setState({ dataSource: 'measures?shoppingChannel=online' });
    }
  }

  render() {
    let iconsForFirstIconBar = [
      {
        id: 'Logo',
        url: logoSrc,
        position: 'Left',
      },
      {
        id: 'Account',
        url: accountSrc, //,
        //position: 'Right',
      },
    ];

    let iconsForSecondIconBar = [
      {
        id: 'Calendar',
        url: calendarSrc,
        position: 'Centre',
        click: this.changeData.bind(this),
      },
    ];

    let iconsForThirdIconBar = [
      {
        id: 'Pulse',
        url: pulseSrc,
        label: 'Pulse',
        position: 'Left',
        color: 'blue',
      },
      {
        id: 'Leaderboard',
        url: leaderboardSrc,
        label: 'Leaderboard',
        position: 'Centre',
      },
      {
        id: 'Notifications',
        url: notificationsSrc,
        label: 'Notifications',
        position: 'Right',
      },
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
        <Measures dataSource={this.state.dataSource} />
        <IconBar
          cssClasses="Footer"
          color="#2bb5fd"
          icons={iconsForThirdIconBar}
        />
      </div>
    );
  }
}

export default App;
