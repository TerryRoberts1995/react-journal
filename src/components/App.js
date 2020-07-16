import React, { Component } from 'react';
import DailySmarty from './journal_list';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="journal-heading">
          <h1>Daily Smarty Posts</h1>
        </div>
        <DailySmarty />
      </div>
    )
  }
}
