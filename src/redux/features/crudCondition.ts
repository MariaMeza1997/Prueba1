import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { initialState } from '../states/crudCondition'

//*service
import { GetCondicion , GetOneCondicion } from '../../service/condition'

export const getOneCondition = createAsyncThunk('crudCondition/getOneCondition', async (id: string) => {
	const data = await GetOneCondicion(id)
	return data
})

export const getAllCondition= createAsyncThunk('crudCondition/getAllCondition', async () => {
	const data = await GetCondicion()
	return data
})

export const FuctioncrudCondition = createSlice({
	name: 'FuctioncrudCondition',
	initialState,
	reducers:{

	},

	extraReducers: (builder) => {

		builder.addCase(getOneCondition.fulfilled, (state, action) => {
			return {
				...state,
				oneCondition: action.payload
			}
		})


		builder.addCase(getAllCondition.fulfilled, (state, action) => {
			return {
				...state,
				condition: action.payload
			}
		})

	},
    
})	

export const {} = FuctioncrudCondition.actions

export default FuctioncrudCondition.reducer