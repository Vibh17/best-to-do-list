"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [des, setdes] = useState("")
  const [main, setmain] = useState([])
  const submithandlebaby=(e)=>{
  e.preventDefault()
  setmain([...main,{task,des}])
  settask("")
  setdes("")
  }
  const deletehandler=(i)=>{
  let copy=[...main]
  copy.splice(i,1)
  setmain(copy)
  }
  let render=<h2 className='text-black'>NO TASK AVAILABLE</h2>;
  if(main.length>0){
    render=main.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-between my-4 '>
        <div className='flex items-center justify-between w-2/3'>
       <h5 className="font-semibold text-2xl">{t.task}</h5>
       <h6 className="text-lg font-medium">{t.des}</h6>
        </div>
        <button 
        onClick={()=>{
      deletehandler(i)
        }}
        className="bg-red-400 text-white rounded font-bold px-3 py-2"> Delete</button>
        </li>
      )
  
    })
  }
  return (
    <>
    
    <h1 className='bg-black text-yellow-400 text-center p-5 font-bold text-3xl' > World's Best To do list by Sir Vibhor</h1>
    <form onSubmit={submithandlebaby}>
    
<input 
type="text"
className="text-3xl border-black border-4 m-8 px-3 py-3 rounded"
placeholder="Enter Your Task Here"
value={task}
onChange={(e)=>{
  settask(e.target.value)
}}
   /> 
   <input 
type="text"
className="text-3xl border-black border-4 m-8 px-3 py-3 rounded"
placeholder="Enter Your Description Here"
value={des}
onChange={(e)=>{
  setdes(e.target.value)
}}
   /> 
   <button className='text-3xl font-bold text-black bg-yellow-400 m-8 px-3 py-3 rounded'>Add Task</button>
    </form>
    <hr/>
    <div className='p-7 bg-slate-300'>
    <ul>
    {render}
    </ul>
    
    </div>
    </>
  )
}

export default page