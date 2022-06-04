import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

test('renders logo text in header', () => {
  const { getByText } = render(
    <Provider store={store}>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
        </BrowserRouter>
    </Provider>
  );

  expect(getByText(/My Shopping App/i)).toBeInTheDocument();
  expect( getByText(/Home/i)).toBeInTheDocument();
  expect( getByText(/Shopping History/i)).toBeInTheDocument();
});
