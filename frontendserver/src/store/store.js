import {configureStore, createSlice} from '@reduxjs/toolkit' 

const currentUserSlice= createSlice ({
    name:"user details",
    initialState:null,
    reducers : {
       
        
    }
})

const store = configureStore ({
reducer : {
currentUser: currentUserSlice.reducer
}
})

export default store;
// export const { } = currentUserSlice.actions

