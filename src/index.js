import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import App from './App';
import Contact from './featureComponents/Contact';
import Users from './featureComponents/Users';
import NotFound from './featureComponents/NotFound';
import './index.css';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>{' '}
        </li>
        <li>
          <Link to="/contact">Contact</Link>{' '}
        </li>
      </ul>
      <Redirect path="/home" exact to="/home" component={App} />
      <Route path="/home" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
