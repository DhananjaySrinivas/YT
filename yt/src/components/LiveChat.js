import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice';
import { MessageGenerator, RandomNameGenerate } from '../utils/Helper';




const LiveChat = () => {
    const dispatch = useDispatch();
    const [LiveChatMessage, SetLiveChatMessage] = useState("")

    const chatMessage = useSelector((store)=>store.Chat.message)
    useEffect(() => {
        const i = setInterval(() => {
            console.log("API Pooling");
            dispatch(addMessage(
                {
                    name:RandomNameGenerate(),
                    message: MessageGenerator(20),
                }
            ))
        }, 5000);
        return () =>clearInterval(i);
    }, [])
    return (
        <>
        <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
            <div>

           
            {chatMessage.map((c,index)=>{
            return ( <ChatMessage key={index} name={c.name} message={c.message} />)
            })}
        </div>
        </div>
        <form onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMessage(
                    {
                        name:"Dhananjay S",
                        message: LiveChatMessage,
                    }
                ))
                SetLiveChatMessage("");
            }} className='w-full p-2 ml-2 border border-black'>
            <input className='w-3/4 px-2' type='text' value={LiveChatMessage} onChange={(e)=>
            {
                SetLiveChatMessage(e.target.value);
                console.log(LiveChatMessage)
            }}/>
            <button className='px-2 mx-2 bg-green-100 ' >Send</button>

        </form>
           
      
        </>
    )
}

export default LiveChat