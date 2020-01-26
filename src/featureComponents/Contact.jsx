import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  myChangeHandler = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div style={{ margin: '1em' }}>
        <h1>Contact</h1>

        <form>
          <h1>Hello, {this.state.username}</h1>
          <p>Enter your name:</p>
          <input
            type="text"
            onChange={this.myChangeHandler}
            style={{ backgroundColor: 'yellow' }}
          />
        </form>
      </div>
    );
  }
}
export default Contact;
