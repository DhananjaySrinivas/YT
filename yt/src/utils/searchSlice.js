import { createSlice } from "@reduxjs/toolkit";

const searchSlice =createSlice({
    name :"Search",
    initialState: {
        
    },
    reducers:
    {
        CacheResults:(state,actions)=>{
            Object.assign(state,actions.payload)
        },
        
    }
});
export const {CacheResults}  = searchSlice.actions;
export default searchSlice.reducer;