import React from 'react'

const Chat = () => { 
  const handelsubmit=()=>{
      
  }
  return (
    <> 
    <div className='min-h-screen bg-amber-100 flex  '>
        <div className='w-[80%] h-[100vh]  bg-linear-to-b from-black via-violet-800 to-blue-600 '>
          <div className='bg-white w-[90px] h-[90px] rounded-full flex justify-center absolute items-center top-5 left-5 m-2 '>
            <img src="/AI.png" alt=""className='scale-150 '/>
          </div>
          <div>
          <input type="text" onSubmit={(e)=>{handelsubmit(e)}} placeholder='Search whatever you want 'className='w-[40%] h-[12%] bg-white rounded-3xl absolute bottom-10 left-79 outline-none text-xl p-2  ' />
          </div>
        </div>
        <div className='w-0.5 h-[100vh] bg-gray-600 '></div>
        <div className='w-[20%] h-[100vh] bg-radial from-blue-800 to-black'>right</div>
    </div>
    </>
  )
}

export default Chat
