
//*TEST
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

//* REACT COMPONENTS
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

//*page
import Index from '../pages/index'


const mockStore = configureStore()
const store = mockStore({})

beforeEach(() => {
	render(<Provider store={store}> <Index /> </Provider>)
	})
	


describe('Index', () => {

	it('Has individualLink link', () => {
		const link = screen.getByTestId('individualLink')
		expect(link).toBeInTheDocument()
	})

})

