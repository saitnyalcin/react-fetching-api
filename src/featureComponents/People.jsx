import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Check from '@material-ui/icons/CheckCircle';

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
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      await axios('https://jsonplaceholder.typicode.com/posts').then(result => {
        !ignore && setData(result.data);
        try {
          if (result.status === 200) {
            console.log('The data fetching is succesfull..');
          }
        } catch (error) {
          throw new Error(error);
        }
      });
    };

    setTimeout(() => {
      fetchData();
      setLoading({ isLoading: true });
      setError({ error: true });
    }, 1000);

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className={classes.root}>
      <div className="list-heading">Json Placeholder Post API</div>
      <div>
        {error && (
          <p className="data-successMessage">
            <Check /> data succesfully fetched... <br />
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
