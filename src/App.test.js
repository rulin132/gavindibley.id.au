import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders My name is Gavin Dibley', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/My name is Gavin Dibley/i);
  expect(linkElement).toBeInTheDocument();
});
