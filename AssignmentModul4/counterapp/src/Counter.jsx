import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    const increment =()=>{
        setCount(count+1)
    }
    const decrement =()=>{
        if (count<=0) {
            
            setCount(0)
        }else{
            setCount(count-1)
        }
    }

  return (
    <div>
        <input type="text" name="" id="" value={count} style={{border:'none',height:"50px",width:'100px',fontSize:"30px", textAlign:'center'}}/>
        <br /><br />
        <button onClick={increment} style={{backgroundColor:'green'}}>increment</button>{" "}
        <button onClick={decrement} style={{backgroundColor:'red'}}>Decrement</button>
    </div>
  )
}

export default Counter