import React from 'react'
import {useState} from 'react'
import './state.css'

const State=()=>{
    const[mystate,setMystate]= useState({
        name:"sreekanth",
        age:22,
        gender:"M"
    })
    const incAge=()=>{
        setMystate((prev)=>({
            ...prev,age:prev.age+1
        }));
    }
    const decAge=()=>{
        setMystate((prev)=>({
            ...prev,age:prev.age-1
        }))
    }
 


    const[num,setNum]=useState(2);
    const incYear=()=>{
        setNum(num+1)
    }
    const decYear=()=>{
        setNum(num-1)
    }

    return (
        <>
        <div className='state'>
            <h2>Name: {mystate.name}</h2>
            <h2>Age:{mystate.age}</h2>
            <h2>Genger:{mystate.gender}</h2>
            <h2>Waiting from:{num} years</h2>

            <button id="r" onClick={incAge}>Age++</button>
            <button id="g" onClick={decAge}>Age--</button>
            <button id ="r" onClick={incYear}>Wait++</button>
            <button id="g" onClick={decYear}>Wait--</button>
        </div>
            
        </>
    )
}
export default State