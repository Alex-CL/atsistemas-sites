import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home, Form } from './features'
import { emptySiteDTO } from './models'

test('renders home component', () => {
	const mockFn = jest.fn()
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

test('renders form component', () => {
	const { getByText } = render(
		<MemoryRouter>
			<Form />
		</MemoryRouter>
	)
	
	const keys = [
		'Name',
		'Path',
		'Public path',
		'Key',
		'Description',
		'Site'
	]
	
	keys.forEach((k) => expect(getByText(k + ':')).toBeInTheDocument())
})
