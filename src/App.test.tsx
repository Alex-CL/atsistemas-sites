import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Home } from './features';

test('renders home component', () => {
  const { getByText } = render(
  	<MemoryRouter>
  		<Home />
	</MemoryRouter>
  );
  const listElement = getByText(/list/i)
  const createElement = getByText(/create/i)
  const infoElement = getByText(/info/i)

  expect(listElement).toBeInTheDocument()
  expect(createElement).toBeInTheDocument()
  expect(infoElement).toBeInTheDocument()
});
