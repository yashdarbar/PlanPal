"use client"


import React from 'react'

const Tassk = ({task, key}) => {
  return (
    <div>
      <div>
        <h1>{task.title}eheh</h1>
        <p>{task.body}</p>
      </div>
    </div>
  )
}

export default Tassk