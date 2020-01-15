import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class App extends Component {
  state = {
    firstname: '',
    lastname: ''
  };

  handleChangeFirstname = event => {
    this.setState({
      firstname: event.target.value
    });
  };
  handleChangeLastname = event => {
    this.setState({
      lastname: event.target.value
    });
  };

  resetInputs = () => {
    this.setState({ firstname: '', lastname: '' });
  };

  render() {
    const divStyle = {
      textAlign: 'center',
      marginTop: 50
    };
    const inputValueStyle = {
      fontSize: 20,
      backgroundColor: 'yellow',
      color: 'red'
    };

    return (
      <div style={divStyle}>
        <Header />
        <div>
          <label style={{ fontSize: 20 }}>Firstname : </label>
          <input
            style={inputValueStyle}
            name={this.state.firstname}
            onChange={this.handleChangeFirstname}
          />
          <span>{this.state.firstname}</span>
        </div>

        <div>
          <label style={{ fontSize: 20 }}>Lastname : </label>
          <input
            style={inputValueStyle}
            lastname={this.state.lastname}
            onChange={this.handleChangeLastname}
          />
          <span>{this.state.lastname}</span>
        </div>

        <button style={{ margin: 20, fontSize: 20, color: 'purple' }}>
          Gonder
        </button>
        <button
          style={{ margin: 20, fontSize: 20, color: 'purple' }}
          onClick={this.resetInputs}
        >
          Resetle
        </button>
      </div>
    );
  }
}
export default App;
