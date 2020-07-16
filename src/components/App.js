import React, { Component } from 'react';
import DailySmarty from './journal_list';

export default class App extends Component {
  render() {
    console.log('This is a test')
    return (
      <div className="App">
        <DailySmarty />
      </div>
    )
  }
}
