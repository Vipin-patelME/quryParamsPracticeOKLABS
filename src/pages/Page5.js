import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Page5 = () => {
  const urlSegment = useParams()
    const segment = urlSegment.id
  return (
    <div className='App'>
      <h1>This is page 5</h1>
      <h3>And url segment is <span style={{color:"red",  fontSize:"28px"}}>{segment}</span></h3>
      <Link className='link-style' to="/">Page1</Link>
    </div>
  )
}

export default Page5