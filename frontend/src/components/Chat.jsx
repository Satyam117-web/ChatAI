import React from 'react'

const Chat = () => {
  return (
    <> 
    <div className='min-h-screen bg-amber-100 flex  '>
        <div className='w-[80%] h-[100vh] '>left</div>
        <div className='w-0.5 h-[100vh] bg-black m-2'></div>
        <div className='w-[20%] h-[100vh] bg-amber-100'>right</div>
    </div>
    </>
  )
}

export default Chat
