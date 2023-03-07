
//* React Router DOm
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//* Pages
import Index from './pages'
import Information from './pages/information'

function App() {

	return (

		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />} />
        		<Route path='/information/:id' element={<Information />} />
			</Routes>
		</BrowserRouter>

	)

}

export default App
