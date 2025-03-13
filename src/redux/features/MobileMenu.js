import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isOpen: false
}
const MobileMenu = createSlice({
    name : "moblieMenu",
    initialState,
    reducers : {
        openMenu : (state)=>{
            state.isOpen = true;
        },
        closeMenu : (state)=>{
            state.isOpen = false;
        }
    }

})

export const { openMenu , closeMenu } = MobileMenu.actions;
export default MobileMenu.reducer