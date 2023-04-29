import React from 'react'
import { Link } from 'react-router-dom'

const Page2 = () => {
  return (
    <div className='App'>
      <h1>This is page 2</h1>
      <h2 style={{color:"red",  fontSize:"28px"}}>Here is nothing to show</h2>
      <Link className='link-style' to="/">Page1</Link>

    </div>
    
  )
}

export default Page2