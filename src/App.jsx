import React from "react"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import { Timer } from "./Timer"
import { LoginScreen } from "./LoginScreen"




function App() {
  

  return (
    <>
    
     <div className='h-screen bg-gradient-to-b from-black via-purple-700 to-black'>
      <h1 className='text-5xl p-8 text-center text-blue-500'> POMODORO</h1>
      <h1 className='text-3xl text-center text-red-400'>POMODORO: Work Smarter Not Harder by Breakin Your Day Into Focused Intervals</h1>
      
     <Router>
      <Routes>
      <Route path="/login" element={<LoginScreen/>}/>
      <Route path="/Timer" element={<Timer/>}/>
         </Routes>
         </Router>
         

        </div>
         
    </>
  )
}

export default App
