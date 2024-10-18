import React, { Fragment, useState } from 'react'
import { question } from './src/faq'

const Question = () => {
    const [show,setShow]=useState(question[0].qno)
  return (
        <Fragment>
        {question.map((i,index)=>{
       return(  
       <div className="main">
            <h4 className='que'onClick={()=>setShow(i.qno)}>{i.question}</h4>
            <p className={`ans ${(i.qno==show)?'ans1':''}`}>{i.answer}</p> 
        </div>
         )         
        })}
    </Fragment>
  )
}

export default Question