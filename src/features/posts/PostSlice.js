import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:1, title:"redux toolkit1", content: "I heard it's nice"},
    {id:2, title:"redux toolkit1", content: "I heard it's fast"}
]

export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
      postAdded:{
        reducer(state, action){
            state.push(action.payload)
          },
          prepare(title, content,userid){
            return{
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    userid
                }
            }
          }
      }
      
    }
})
export const {postAdded} = postSlice.actions
export default postSlice.reducer;