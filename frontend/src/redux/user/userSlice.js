import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    error : null,
    loading : false
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        signInStart : (state) =>{
            state.loading = true;
        },
        signInSuccess : (state,action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure : (state,action) =>{
            state.error = action.payload;
            state.loading = false;
        },
        updateUserStart : (state,action)=>{
            state.loading = true;
        },
        updateUserSucces : (state,action)=>{
            state.currentUser = action.payload;
            state.loading = false
            state.error = null
        },
        updateUserFailure : (state,action)=>{
            state.error= action.payload;
            state.loading = false
        },
        deleteUserStart :(state)=>{
            state.loading = true
        },
        deleteUserSuccess:(state)=>{
            state.currentUser = null;
            state.loading = false;
            state.error = null
        },
        deleteUserFailure : (state,action)=>{
            state.error = action.payload;
            state.loading = false
        },
        logoutStart: (state)=> {
            state.loading= true
        },
        logoutSuccess:(state)=>{
            state.currentUser = null;
            state.loading =false;
            state.error = null;
        },
        logoutFailure : (state,action)=>{
            state.error = action.payload;
            state.loading = false;
        }
    }
})
export const {signInStart,signInSuccess,signInFailure, 
    updateUserStart, updateUserSucces, 
    updateUserFailure
    ,deleteUserStart,deleteUserSuccess,deleteUserFailure,
    logoutStart,logoutSuccess,logoutFailure
    } = userSlice.actions;
export default userSlice.reducer;