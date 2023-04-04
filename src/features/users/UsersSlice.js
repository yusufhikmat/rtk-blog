import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:1, name:"Ayo Ola"},
    {id:2, name:"Yusuf Hikmat"}
]

export const UsersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state)=>state.users

export default UsersSlice.reducer