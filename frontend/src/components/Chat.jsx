import React, { useState } from 'react'

const Chat = () => { 
  const[input,setInput]=useState("");

  const handelSubmit=async(e)=>{
    e.preventDefault();
    console.log("Query sent");
    try {
      const response =await fetch("/api/query",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      })
      const result = await response.json();
      console.log(result);
      
    }catch (err){
      console.log(err);
    }
      
    setInput("");
  }
  
  return (
    <> 
    <div className='min-h-screen bg-amber-100 flex flex-col md:flex-row'>
       
        <div className='w-full md:w-[80%] h-screen md:h-[100vh] bg-linear-to-b from-black via-violet-800 to-blue-600 relative'>
          
          <div className='-bg-conic-150 from-blue-600 via-yellow-400 to-red-600 p-1 w-[70px] sm:w-[80px] md:w-[90px] h-[70px] sm:h-[80px] md:h-[90px] rounded-full flex justify-center absolute items-center top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 m-2'>
            <img src="/AI.png" alt="AI" className='scale-150'/>
          </div>
          
        
          <form onSubmit={handelSubmit} className='w-full px-4 sm:px-6 md:px-0'>
            <div className='w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-auto min-h-[50px] sm:h-[60px] md:h-[12%] bg-white rounded-3xl absolute bottom-5 left-1/2 transform -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 xl:left-1/2 xl:-translate-x-1/2 outline-none text-sm sm:text-base md:text-xl p-1 sm:p-2 hover:scale-105 transition-all cursor-pointer'>
              <input 
                type="text" 
                value={input}
                name='input'
                onChange={(e) => {
                  setInput(e.target.value);
                  console.log(e.target.value);
                }}
                placeholder='Search whatever you want'
                className='bg-white rounded-3xl p-2 sm:p-3 md:p-4 outline-none text-sm sm:text-base md:text-xl w-full pr-10 sm:pr-12'
              />
              <button 
                type="submit"
                className='w-[25px] sm:w-[28px] md:w-[30px] h-[25px] sm:h-[28px] md:h-[30px] bg-black rounded-full absolute bottom-2 sm:bottom-2.5 md:bottom-3 right-2 sm:right-2.5 md:right-3 flex items-center justify-center text-white text-sm sm:text-base'
              >
                👆
              </button>
            </div>
          </form>
        </div>
        
         
        <div className='hidden md:block w-[0.8px] h-[100vh] bg-radial from-blue-700 to-black'></div>
        
        <div className='w-full md:w-[20%] h-auto md:h-[100vh] bg-linear-to-b from-black via-violet-800 to-blue-600 p-4 md:p-0'>
          <div className='h-auto w-full bg-white/10 rounded-3xl mt-0 md:mt-5 text-white p-4 md:p-6 backdrop-blur-sm'>
            Recent
          </div>
        </div>
    </div>
    </>
  )
}

export default Chat