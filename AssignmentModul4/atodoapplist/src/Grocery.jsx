import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Grocery = () => {
 const main={
    height:'100vh',
    width:'600px',
    backgroundColor:'#6f75e1',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
 }
 const sub={
    height:'560px',
    width:'560px',
    border:'2px solid #1f1551',
    backgroundColor:'#1f1551',
 }
 const[name,setName]=useState("")
 const [id,setID]=useState('')
 const [data,setData]= useState([])

const saveData=(i)=>{
   i.preventDefault()
   if (id!="") {
      let updet= data.map((i,index)=>{
         if (index==id) {
            i=name
         }
         return i
      })
      setData(updet)
   } else {
      setData([
         ...data,
         name
 ])
   }
setName('')
setID('')  
}

const delData=(id)=>{
  let delet= data.filter((i,index)=>{
         return index!=id
  })
  setData(delet)
}
const editData=(id)=>{
   let udate= data.find((i,index)=>{
      return index==id
   })
   setData(udate)
   setID(id)
}
  return (
    <div style={main}>
       <div style={sub}>
        <h1>Grocery Shoping</h1>
        <form action="" method='post' onSubmit={saveData}style={{display:'flex',alignItems:'center', justifyContent:'center',margin:'10px'}}>
            <input type="text" name="item" id="" placeholder='Add something to your list' value={name}  onChange={(e)=>setName(e.target.value)} style={{border:'2px solid #07c8e1e6',backgroundColor:'transparent',height:'30px',width:'320px',fontSize:'20px'}}/>{'  '}
            <input type="submit" value={id!=''?"Update":"Add"} style={{backgroundColor:'#07c8e1e6',height:'35px',width:'45px', textAlign:'center',border:'none'}}/>
        </form>
        <table style={{height:'auto', margin:'50px', width:'80%'}}>
          <tr style={{width:'70%'}}>
            <th>No</th>
            <th style={{width:'85%',backgroundColor:'#31335c'}}>Grocery</th>
            <th>Action</th>
          </tr>
          {
            data.map((i,index)=>{
               return(
                  <tr>
                     <td>{index+1}</td>
                     <td style={{backgroundColor:'#07c8e1e6',fontSize:'20px'}}>{i}</td>
                     <td><button onClick={()=>delData(index)}><FontAwesomeIcon icon={faTrash} /></button> <button onClick={()=>editData(index)}><FontAwesomeIcon icon={faPenToSquare} /></button></td>
                  </tr>
               )
            })
         }
         <button>DeletALl</button>
        </table>
       </div>
    </div>
  )
}

export default Grocery