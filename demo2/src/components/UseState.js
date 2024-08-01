import React,{useState} from 'react'

const UseState=()=>{
    const[count,setCount]=useState(0);
    return (<>
    <h3>The count is {count}</h3>
    <button onClick={()=>setCount(count+1)} >inc</button>   
    <button onClick={()=>setCount(count-11)} >dec</button>  
    <button onClick={()=>setCount(count+1)} >reset</button>  

    </>)
}