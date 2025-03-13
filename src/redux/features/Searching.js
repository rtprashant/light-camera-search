import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searching : false ,
    searchRes : [] ,
    searchErr : null,
}
const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers: {
        startSearch : (state)=>{
            state.searching = true
            state.searchErr = null 
            state.searchRes = []
        },
        searchFailed : (state , action)=>{
            state.searching = false
            state.searchErr = action.payload
            state.searchRes = []
        },
        searchSuccess : (state , action)=>{
            state.searching = false
            state.searchErr = null,
            state.searchRes = action.payload
        },
        searchStop : (state)=>{
            state.searchRes = []
        }

    }
})

export const {startSearch , searchFailed , searchStop , searchSuccess} = searchSlice.actions
export default searchSlice.reducer