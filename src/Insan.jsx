import React from 'react';

const InsanComponenti = props => {
  return (
    <div>
      {props.name === 'burak' ? (
        <h1>Hosgeldin {props.name}</h1>
      ) : (
        <h1>Unknown access..!!</h1>
      )}
    </div>
  );
};

export default InsanComponenti;
