import React from 'react';
import { withStyles } from '@material-ui/core/styles';

// Define the CSS styles you which to apply to your component
const styles = {
  root: {
    color: 'red',
    '& .list-heading': {
      fontSize: '2em',
      color: 'Blue',
      marginTop: '2em',
      fontWeight: 'bold'
    }
  }
};

const People = ({ classes }) => {
  const names = ['Steve', 'David', 'John', 'Sally'];
  const nameList = names.map((name, key) => (
    <ul style={{ listStyle: 'none' }}>
      <li key={`person-${key}`}>{name}</li>
    </ul>
  ));

  return (
    <div className={classes.root}>
      <div className="list-heading">Name database</div>
      <h1>{nameList}</h1>
    </div>
  );
};

export default withStyles(styles)(People);
