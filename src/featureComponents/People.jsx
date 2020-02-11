import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Check from '@material-ui/icons/CheckCircle';

// set HOC styling for the view
const styles = {
  root: {
    '& .list-heading': {
      fontSize: '2em',
      color: 'Blue',
      marginTop: '1em',
      fontWeight: 'bold'
    },
    '& .data-successMessage': {
      color: 'Green',
      marginTop: '1em',
      fontWeight: 'bold'
    },
    '& .data-errorMessage': {
      color: 'Red',
      marginTop: '1em',
      fontWeight: 'bold'
    },
    '& .data-person': {
      marginTop: '1em'
    }
  }
};

const People = ({ classes }) => {
  const [data, setData] = useState([]); // set state for the api data
  const [isLoading, setLoading] = useState(false); // set state for user loading alert
  const [error, setError] = useState(false); // set error state for error message

  // set useEffect hook to control the application life cycle
  useEffect(() => {
    // set and Api call using the built-in data fetching library
    const fetchData = async () => {
      try {
        await axios('https://jsonplaceholder.typicode.com/posts').then(
          result => {
            setData(result.data);
            // if the data fetching is successfull, then show log in the console
            result.status === 200 &&
              console.log('The data fetching is successfull');
          }
        );

        // set the catch error if there would be an error occurances
      } catch (error) {
        setError(error);
      }
    };

    // set time out for 1 second to load or show the data on the UI
    let loadingTimer = setTimeout(() => {
      fetchData();
      setLoading({ isLoading: true });
      setError({ error: true });
    }, 1000);

    // this will clear Timeout when component unmont like in willComponentUnmount
    return () => window.clearTimeout(loadingTimer);

    //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  }, []);

  return (
    <div className={classes.root}>
      <div className="list-heading">Json Placeholder Post API</div>
      <div>
        {error && (
          <p className="data-successMessage">
            <Check /> data succesfully fetched!
            <br />
          </p>
        )}
      </div>
      <div>
        {isLoading ? (
          <>
            {data.map((title, id) => (
              <p className="data-person" key={`person-${id}`}>
                <b> Title : {title.title}</b> <br /> <u>Description </u> :{' '}
                {title.body}
              </p>
            ))}
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(People);
