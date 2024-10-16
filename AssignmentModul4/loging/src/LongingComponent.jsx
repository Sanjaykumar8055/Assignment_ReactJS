import React, { useState } from 'react'

const Longingcomponent = () => {
    const [show,setShow]=useState(false)
    const [rag,setRag]=useState(false)
  return (
    <>
   <div className="main">
   <h3>Modal loging form</h3>
    <button className='btn1' onClick={()=>setShow(!show)}>Open Model</button>
    <h3>Model Registration Form</h3>
    <button className='btn2' onClick={()=>setRag(!rag)}>Open Model</button>
   </div>

   <div className={`bgmodul ${(show)?'bgmodul1':''}`}></div>
   
   <div className={`loging ${(show)?'loging1':''}`}>
    <button onClick={()=>setShow(false)} style={{position:'absolute',right:'0px',backgroundColor:'#FFD700'}}>close</button>
    <h2>Loging to My Account</h2>
    <input type="email" name="" id="email" className='inp' placeholder='Enter email'/>
    <input type="password" name="" id="password" className='inp' placeholder='Enter Password'/>
    <br />
    <input type="checkbox" name="" id=""/><label htmlFor="">Remember Me on THis Coputer</label>
    <br />
    <br />
    <button className='logBtn'>Loging</button>
   </div>

   <div className={`bgmodul ${(rag)?'bgmodul1':''}`}></div>

   <div className={`loging ${(rag)?'loging1':''}`}>
    <button onClick={()=>setRag(false)} style={{position:'absolute',right:'0px',backgroundColor:'#FFD700'}}>close</button>
    <h2>Register to My Account</h2>
    <input type="email" name="" id="email" className='inp' placeholder='Enter email'/>
    <input type="password" name="" id="password" className='inp' placeholder='Enter Password'/>
    <br />
    <input type="checkbox" name="" id=""/><label htmlFor="">Remember Me on THis Coputer</label>
    <br />
    <br />
    <button className='logBtn'>Register</button>
   </div>
    </>
  )
}

export default Longingcomponent;