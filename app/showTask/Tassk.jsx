"use client"


import React from 'react'

const Tassk = ({task, key}) => {
  return (
    // <div className=' m-4 flex '>
    //   <div key={key} className='m-auto justify-center  flex flex-col w-3/5'>
    //     <h1>{task.title}</h1>
    //   {/* <h1>{task.title}eheh</h1>
    //     <p>{task.body}</p> */}

    //     {/* <h1 className='flex justify-center text-2xl font-bold'>Titel</h1>
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius sit eaque minima qs.</p> */}
    //   </div>
    // </div>
    <div>
      <div key={key} className=' bg-white flex flex-col mb-2 border-4 border-gray rounded-xl py-3 px-2 w-96'>
        <h1 className='font-bold text-xl'>{task.title}eheh</h1>
        <p className='text-lg '>{task.body}</p>
        <button className='bg-black w-fit text-white px-2 py-1 rounded-lg mt-2 m-auto'>Delete</button>
      </div>
    </div>
  )
}

export default Tassk