import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "../features/posts/PostSlice";
import UsersReducer from "../features/users/UsersSlice";

export const store = configureStore({
    reducer:{
        posts:PostsReducer,
        users:UsersReducer
    }
})