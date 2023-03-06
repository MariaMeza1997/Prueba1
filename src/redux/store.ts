import { configureStore } from "@reduxjs/toolkit";

import GetCondition from "./factures/CrudCondition";

export const store = configureStore ({
    reducer:{
       GetCondition:GetCondition
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch