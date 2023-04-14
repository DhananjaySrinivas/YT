import React from 'react'

const ChatMessage= ({name, message}) => {
  return (
    <div className='flex shadow-sm items-center'>
         <img className='w-5 h-5'
  alt="user"
  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
  <span className='mx-2 font-bold'>
   {name}
  </span>
  <span>
    {message}
  </span>
    </div>
  )
}

export default ChatMessage;
