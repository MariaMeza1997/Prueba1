//*redux
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
//*InicialState
import { initialState } from "../states/GetCondition";
//*service
import { GetCondicion } from "../../service/condition";

export const getCondicion =createAsyncThunk('condition/GetCondicion' , async()=>{
    const data = await GetCondicion()
    return data
})

export const fuctionGetCondition = createSlice ({
    name:'fuctionGetCondition',
    initialState,
    reducers:{

    }, 
    extraReducers:(builder)=>{
            builder.addCase(getCondicion.fulfilled,(state, action)=>{
                return{
                    ...state, 
                    condition:action.payload
                }
            })
    }
})
export const {} = fuctionGetCondition.actions
export default fuctionGetCondition.reducer