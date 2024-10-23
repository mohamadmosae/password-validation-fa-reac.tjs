import React, { useState } from 'react'
import Progress from './progress'

function App() {
    const [password,setpassword]=useState("")
    
    
  return (
    <div className='container'>
        <h4 className='text-center py-3 m-100'>پسوردتو بزن</h4>
        <div className="col-md-6 text-center mx-auto py-5">
            <div className="form-gruop">
<input type="text"
 className='form-control'
 placeholder='پسورد شما' 
 onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <Progress password={password}/>
        </div>
    
    </div>
  )
}

export default App
