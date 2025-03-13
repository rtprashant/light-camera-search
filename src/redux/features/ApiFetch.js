import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    apiData : null ,
    loading : false ,
    error : null,
}

const apiFetchSlice = createSlice({
    name:"api",
    initialState,
    reducers : {
        apiFetchStartReq : (state)=>{
            state.apiData = null,
            state.loading = true,
            state.error = null
        },
        apiFetchSuccess : (state , action)=>{
            state.apiData = action.payload,
            state.loading = false,
            state.error = null
        },
        apiFetchError : (state , action)=>{
            state.apiData = null,
            state.loading = true,
            state.error = action.payload
        },
        apiFetchStop : (state)=>{
            state.loading = false
        },
    }
})

export const {apiFetchError , apiFetchStartReq , apiFetchSuccess , apiFetchStop}  = apiFetchSlice.actions
export default apiFetchSlice.reducer