import * as React from 'react';
import * as ReactDOM from 'react-dom';
import app from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
