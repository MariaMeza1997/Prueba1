import { configureStore } from '@reduxjs/toolkit'

//*Slices
import crudBlog from './features/crudCondition'


export const store = configureStore({
	reducer: {
		FuctioncrudCondition :crudBlog,
		
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch