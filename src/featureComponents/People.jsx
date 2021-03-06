import { withStyles } from "@material-ui/core/styles";
import Check from "@material-ui/icons/CheckCircle";
import React, { useEffect, useState } from "react";

// set HOC styling for the view
const styles = {
  root: {
    "& .list-heading": {
      fontSize: "2em",
      color: "Blue",
      marginTop: "1em",
      fontWeight: "bold",
    },
    "& .data-successMessage": {
      color: "Green",
      marginTop: "1em",
      fontWeight: "bold",
    },
    "& .data-errorMessage": {
      color: "Red",
      marginTop: "1em",
      fontWeight: "bold",
    },
    "& .data-person": {
      marginTop: "1em",
    },
  },
};

const People = ({ classes }) => {
  const [data, setData] = useState([]); // set state for the api data
  const [isLoading, setLoading] = useState(false); // set state for user loading alert
  const [error, setError] = useState(false); // set error state for error message

  // set and Api call using the built-in data fetching library
  async function callPeopleApi() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  // set useEffect hook to control the application life cycle
  useEffect(() => {
    // set time out for 1 second to load or show the data on the UI
    let loadingTimer = setTimeout(() => {
      callPeopleApi();
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
                <b> Title : {title.title}</b> <br /> <u>Description </u> :{" "}
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
