import {createSlice} from "@reduxjs/toolkit"

const initialState= {
    searches : {}
}

const searchSlice = createSlice({
    name:"search",
    initialState ,
    reducers:{
        addSearch:(state,{payload})=>{
            state.searches = payload
         }       
    }
})

export const {addSearch} = searchSlice.actions
export const getSearch = (state)=> state.search.searches;
export default searchSlice.reducer