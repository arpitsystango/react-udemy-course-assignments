import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Arpit'
  };

  nameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.username} />
        <UserInput username={this.state.username} onNameChange={this.nameChangeHandler} />
        <UserOutput username={'Aditya'} />
      </div>
    );
  }
}

export default App;
