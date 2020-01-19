import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '@material-ui/icons/ErrorOutline';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <PageNotFound />
      <p style={{ textAlign: 'center' }}>
        <Link to="/home">Go to Home </Link>
        <div>
          <h3>Sorry mate.. page is not founds..</h3>
        </div>
      </p>
    </div>
  );
};
export default NotFound;
