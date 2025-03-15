import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searching : false ,
    searchRes : [] ,
    searchErr : null,
    page : 1,
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
            state.searchErr = null
            state.searchRes = [...state.searchRes,...action.payload]
        },
        searchStop : (state)=>{
            state.searchRes = []
        },
        incrementPage : (state)=>{
            state.page = state.page+1;
        }

    }
})

export const {startSearch , searchFailed , searchStop , searchSuccess , incrementPage} = searchSlice.actions
export default searchSlice.reducer