import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {buildPrivateRoute} from '../../utils/routes';

import {Provider} from 'react-redux';

import {ConnectedRouter} from 'connected-react-router';

import s from './App.css';
import cl from 'classnames';

const NotFoundPage = () => {
  return <h1>Page Not Found</h1>;
};

const HomePage = () => {
  return <h1>This is the Home Page</h1>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.PrivateRoute = buildPrivateRoute(props.store);
  }
  render() {
    const {store, history} = this.props;
    const PrivateRoute = this.PrivateRoute;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className={cl(s.App)}>
            <header>
              <h1>React Starter</h1>
            </header>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
