import React from 'react';
import People from './People';

class Users extends React.Component {
  render() {
    return (
      <div style={{ margin: '1em' }}>
        <h1>Users</h1>
        <People />
      </div>
    );
  }
}
export default Users;
