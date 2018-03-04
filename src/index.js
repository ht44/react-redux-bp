import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './register-service-worker';
import Root from './root'
import './root.css'

const target = document.querySelector('#root');

render(<Root />, target);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextRoot = require('./root').default;
    render(<NextRoot />, target);
  });
}

registerServiceWorker();