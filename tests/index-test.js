import expect from 'expect'
import React from 'react'
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import Component from 'src/'

let container;

global.IS_REACT_ACT_ENVIRONMENT = true;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
})

afterEach(() => {
  document.body.removeChild(container);
  container = null;
})

it('displays a welcome message', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Component>Welcome to React Device Preview</Component>);
  });

  expect(container.innerHTML).toContain('Welcome to React Device Preview')
})
