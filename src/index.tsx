import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store/index';
import App from 'components/App/App';

const rootElement = document.getElementById('root');

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement,
);
