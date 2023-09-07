import React, { useEffect, useState } from 'react'
// import App from './App';
// export const mycontext=React.createContext();

export const Clock = () => {
    let [count,setcount]=useState(1500);
    let [paused,setpaused]=useState(false)
    let [onbreak,setonbreak]=useState(false)

    useEffect(()=>{
      if(paused && count>0){
        
        
       const interval = setInterval(() => {
        setcount((count) => count - 1);

    }, 1000);

    return () => clearInterval(interval)
    
      }

      if(count == 0 ){
         setcount(300)
         setonbreak(!onbreak)
         
      }

    
    },[count,paused]);


    // useEffect(
    //     ()=>{
    //         if(count=0){
    //              setcount(40)
    //         }
    //     }
    // )

    const Reset = ()=>{
        setcount(1500);
        setpaused(!paused)
    }

    const deactivateclock = ()=>{
        setpaused(!paused);
    };

    const timecal= (count)=>{
        const mins = Math.floor(count / 60);
        const secs = count % 60;
        return `${mins < 10 ? "0" + mins : mins}:${secs < 10? "0" + secs :secs}`
    }

    // const breakit = ()=>{
    //        if(count = 0){
    //           setcount(1000)
    //        }
    // }

    
  return (
    <div className='flex items-center justify-center m-auto flex-col'>
        
        <h3 className=' text-7xl font-bold'>
            {timecal(count)}
        </h3>
        <button className='text-3xl font-bold' onClick={()=>{deactivateclock()}}>{onbreak?"onbreak":paused?"Pause":"Start"}</button>
        <button className='text-xl font-bold' onClick={()=>{Reset()}}> Reset </button>
         

         {/* <mycontext.Provider value={onbreak}>
            <App/>
         </mycontext.Provider> */}
    </div>
  )
}
