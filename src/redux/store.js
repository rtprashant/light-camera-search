import { configureStore } from "@reduxjs/toolkit";
import mobileMenuSlice from './features/MobileMenu'
import apiFtechSlice from './features/ApiFetch'
import searchSlice from './features/Searching'
export const store = configureStore({
   reducer:{
    moblieMenu: mobileMenuSlice,
    api : apiFtechSlice,
    search: searchSlice,
   } 
})