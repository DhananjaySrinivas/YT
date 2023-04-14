import {  createSlice } from "@reduxjs/toolkit";
import {LIVE_CHAT_COUNT} from "./Constant"


const ChatSlice = createSlice({
    name : "LiveChat",
    initialState:{
        message :[]
    },
    reducers:
    {
       addMessage:(state,actions)=>{
        state.message.splice(LIVE_CHAT_COUNT,1)
        state.message.push(actions.payload)
       }
    }


});

export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer;