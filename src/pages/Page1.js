import React from 'react'
import {Link, useSearchParams } from 'react-router-dom'

const Page1 = () => {
  const [params] = useSearchParams()
    const qparams = params.get("name")
  return (
    <div className='App'>
      <h1>This is page 1</h1>
      <h3>And querry params is :------  <span style={{color:"red",  fontSize:"28px"}}>{qparams}</span></h3>
      <Link className='link-style' to="/">Page1</Link>
    </div>
    
  )
}

export default Page1