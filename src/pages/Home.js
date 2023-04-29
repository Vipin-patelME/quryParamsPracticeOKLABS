import React, { useState } from 'react'
import { Link, Outlet} from 'react-router-dom'

const Home = () => {

  const [params, setParams] = useState("oklabs")
    
    const segment1 = "someroutes-student-1"
    const segment2 = "someroutes-student-2"

  return (
    <div style={{marginTop: "40px"}} className='App'>
        <div>
            <Link className='link-style' to={`page1?name=${params}`}>Page1</Link>
            <Link className='link-style' to={`page2`}>Page2</Link>
            <Link className='link-style' to={`page4/${segment1}`}>Page4</Link>
            <Link className='link-style' to={`page5/${segment2}`}>Page5</Link>
        </div>
        <h1>This is homepage</h1>
        <h4>Want to set params.......? ok </h4>
        <input onChange={(e)=>{setParams(e.target.value)}} value={params} type={"text"} placeholder="type here qparams"/>
        <h2>Enter the your own query param value into input box and click on page1 btn </h2>
        <Outlet />
    </div>
  )
}

export default Home