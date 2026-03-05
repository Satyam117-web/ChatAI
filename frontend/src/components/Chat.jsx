import React from 'react'

const Chat = () => { 
  const handelsubmit=(e)=>{
      e.preventDefault();
  }
  const handelClick=(e)=>{
    e.preventDefault();
  }
  return (
    <> 
    <div className='min-h-screen bg-amber-100 flex  '>
        <div className='w-[80%] h-[100vh]  bg-linear-to-b from-black via-violet-800 to-blue-600 '>
          <div className='-bg-conic-150 from-blue-600 via-yellow-400  to-red-600 p-1 w-[90px] h-[90px] rounded-full flex justify-center absolute items-center top-5 left-5 m-2 '>
            <img src="/AI.png" alt=""className='scale-150 '/>
          </div>
          <div className='w-[40%] h-[12%] bg-white rounded-3xl absolute bottom-10 left-79 outline-none text-xl p-2  hover:scale-105 transition-all cursor-pointer' >
          <input type="text" onSubmit={(e)=>{handelsubmit(e)}} placeholder='Search whatever you want 'className='bg-white rounded-3xl  p-4 outline-none text-xl p-2 w-full  ' />
          <button className=' w-[30px] h-[30px]  bg-black   rounded-full  absolute bottom-6 right-5'onClick={()=>{handelClick()}} >👆</button>
          </div>
        </div>
        <div className='w-[0.8px] h-[100vh] bg-radial from-blue-700 to-black '></div>
        <div className='w-[20%] h-[100vh]  bg-linear-to-b from-black via-violet-800 to-blue-600'>
          <div className=' h-[10px] w-auto bg-white rounded-3xl mt-5 text-white  p-6'>
         Recent
          </div>
          
          </div>
    </div>
    </>
  )
}

export default Chat
