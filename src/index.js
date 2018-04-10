import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
      <AppContainer>
          <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App)
    })
}

registerServiceWorker();
